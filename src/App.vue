<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
#app {
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  display: flex;
  justify-content: space-between;
}
</style>
