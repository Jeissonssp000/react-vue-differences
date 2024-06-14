<template>
  <section id="upload" class="max-800 gap fw pad">
    <form class="flex gap" @submit.prevent="uploadFile">
      <input type="file" @change="handleFileUpload" />
      <button type="submit" class="bg max-width">Cargar archivo</button>
    </form>
    <h2 class="pad">Lista de Archivos</h2>
    <div class="vertical gap pad scroll" style="max-height: 300px;">
      <div class="card flex gap align-center" v-for="file in files" :key="file.name">
        <button @click.prevent="promptPassword(file.url, file.name)">Descargar</button>
        <span class="fw ellipsis">{{ file.name }}</span>
      </div>
    </div>
    <div v-if="showModal" class="modal_container fixed center" @click="closeModal">
      <div class="modal max-370 clear pad rel" @click.stop>
        <span class="abs cursor" style="top: 5px;right: 5px;" @click="closeModal">&times;</span>
        <h4>Ingresa la contraseña para descargar</h4>
        <form class="flex gap" @submit.prevent="handlePasswordSubmit">
          <input type="password" v-model="password" placeholder="Contraseña" required />
          <button type="submit">Descargar</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { Log } from '@/utils/logsHandler';
import { getFiles, logIn } from '../utils/firebase';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const apiUrl = process.env.VUE_APP_DEV === 'true' ? "http://127.0.0.1:5001/playground-dyd/us-central1/api" : "https://api-knn7snbyhq-uc.a.run.app"
console.log(process.env.VUE_APP_DEV === 'true' ? "desarrollo" : "producción");
export default {
  name: "UploadFile",
  data() {
    return {
      file: null,
      files: [],
      showModal: false,
      password: '',
      filePath: '',
      fileName: ''
    };
  },
  created() {
    this.fetchFiles();
  },
  beforeDestroy() {
    if (this.unsub) {
      this.unsub();
    }
  },
  methods: {
    fetchFiles() {
      this.unsub = getFiles(files => {
        this.files = files;
      });
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async downloadFile(filePath) {
      Log(filePath)
      const storage = getStorage();
      const fileRef = ref(storage, filePath);
      Log("Archivo descargandose")
      try {
        const url = await getDownloadURL(fileRef);
        window.open(url, '_blank');
        Log("Archivo descargado")
      } catch (error) {
        console.error("Error al obtener la URL de descarga", error);
      }
    },
    promptPassword(path, name) {
      this.filePath = path;
      this.fileName = name;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.password = '';
      this.filePath = '';
      this.fileName = '';
    },
    handlePasswordSubmit() {
      logIn(this.password, (result) => {
        if (result) {
          this.downloadFile(this.filePath, this.fileName);
          this.closeModal();
        } else {
          alert('Contraseña incorrecta');
        }
      })
    },
    async uploadFile() {
      if (!this.file) {
        alert('Por favor, selecciona un archivo.');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.file);

      try {
        const response = await fetch(`${apiUrl}/upload`, {
          method: 'POST',
          body: formData,
        });

        Log(response);
        if (!response.ok) {
          throw new Error('Error en la subida del archivo: ' + response.statusText);
        }

        const result = await response.json();
        Log(result);
      } catch (error) {
        Error(error)
      }
    },
  },
}
</script>