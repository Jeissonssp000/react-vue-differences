<template>
  <footer class="fw center">
    <div class="max-1200 justify-between align-center fw pad">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/logo.png">
      </router-link>
      <span>{{ "Hecho con <3 por Jeissonssp" }}</span>
      <router-link to="/">
        <span>Comparativas.com</span>
      </router-link>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 50px;
  padding-block: 20px;
}

img {
  height: 50px
}
</style>