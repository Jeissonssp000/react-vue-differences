<template>
  <header class="fw center sticky">
    <nav class="max-1200 justify-between align-center fw pad">
      <img alt="Vue logo" src="../assets/logo.png">
      <ul class="flex gap max-width">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#differences">Diferencias</a></li>
        <li><a href="#upload">Cargar archivo</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {}
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

img {
  height: 20px
}
</style>