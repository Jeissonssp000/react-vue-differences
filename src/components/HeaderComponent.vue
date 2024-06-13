<template>
  <header class="fw center sticky">
    <nav class="max-1200 justify-between align-center fw pad">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/logo.png">
      </router-link>
      <div class="flex gap max-width">
        <router-link to="/">Inicio</router-link>
        <router-link to="/upload">Cargar archivo</router-link>
      </div>
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
img {
  height: 50px
}
</style>