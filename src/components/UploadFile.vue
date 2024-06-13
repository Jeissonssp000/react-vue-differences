<template>
  <section id="upload" class="max-1200 center gap fw pad">
    <form @submit.prevent="uploadFile">
      <input type="file" @change="handleFileUpload" />
      <button type="submit">Upload</button>
    </form>
    <div v-if="uploadedFiles.length">
      <h3>Archivos descomprimidos:</h3>
      <ul>
        <li v-for="file in uploadedFiles" :key="file">{{ file }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "UploadFile",
  data() {
    return {
      file: null,
      uploadedFiles: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async uploadFile() {
      if (!this.file) {
        alert('Por favor, selecciona un archivo.');
        return;
      }

      const formData = new FormData();
      formData.append('zipFile', this.file);

      try {
        const response = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Error en la subida del archivo');
        }

        const result = await response.json();
        this.uploadedFiles = result.files;
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
}
</script>