const Busboy = require("busboy");
const os = require("os");
const path = require("path");
const unzipper = require("unzipper");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { uploadUnzippedFileToStorage, uploadFilesRoutes } = require("../src/firebase");

exports.fileUploadAndUnzip = function (req, res, next) {
  const busboy = new Busboy({
    headers: req.headers,
    limits: { fileSize: 50 * 1024 * 1024 },
  });

  const fields = {};
  const tmpdir = os.tmpdir();
  const uploadedFiles = [];

  busboy.on("field", (key, value) => {
    fields[key] = value;
  });

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    console.log("Archivo cargado");
    const filepath = path.join(tmpdir, filename);
    const writeStream = fs.createWriteStream(filepath);
    file.pipe(writeStream);
    
    writeStream.on("finish", () => {
      writeStream.close(async () => {
        const unzipDir = path.join(tmpdir, `${path.basename(filename, path.extname(filename))}_${uuidv4()}`);
        if (!fs.existsSync(unzipDir)) {
          fs.mkdirSync(unzipDir);
        }
        console.log("Archivo descompreso");

        fs.createReadStream(filepath)
          .pipe(unzipper.Extract({ path: unzipDir }))
          .on('close', async () => {
            const files = fs.readdirSync(unzipDir);
            const fileUploadPromises = files.map(async (file) => {
              const localFilePath = path.join(unzipDir, file);
              const remoteFileName = `uploads/${file}`;
              await uploadUnzippedFileToStorage(localFilePath, remoteFileName);
              uploadedFiles.push({ name: file, url: remoteFileName });
            });

            await Promise.all(fileUploadPromises);
            await uploadFilesRoutes(uploadedFiles);
            res.status(200).send("Archivos subidos y descomprimidos con éxito");
          })
          .on('error', (err) => {
            console.error("Error al descomprimir el archivo:", err);
            res.status(500).send("Error al descomprimir el archivo");
          });
      });
    });

    writeStream.on('error', (err) => {
      console.error('Error al escribir el archivo:', err);
      res.status(500).send('Error al escribir el archivo');
    });

    file.on('limit', () => {
      console.error('Archivo excede el límite de tamaño');
      res.status(413).send('Archivo excede el límite de tamaño');
    });
  });

  busboy.on("finish", () => {
    console.log("Carga de archivos completa");
  });

  busboy.on('error', (err) => {
    console.error('Error en Busboy:', err);
    res.status(500).send('Error en la carga de archivos');
  });

  busboy.end(req.rawBody);
};
