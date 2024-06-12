<template>
  <header class="justify-between align-center sticky fw pad">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul class="flex gap max-width">
      <li><a href="#home">Inicio</a></li>
      <li><a href="#differences">Diferencias</a></li>
      <li><a href="#upload">Cargar archivo</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  props: {}
}
</script>

<style scoped>
img {
  height: 20px
}
</style>