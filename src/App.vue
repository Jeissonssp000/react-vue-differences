<template>
  <div id="app">
    <HeaderComponent />
    <WelcomeComponent />
    <DifferencesComponent items="data" />
    <UploadFile />
  </div>
</template>

<script>
import WelcomeComponent from './components/WelcomeComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import DifferencesComponent from './components/DifferencesComponent.vue'
import UploadFile from './components/UploadFile.vue'

export default {
  name: 'App',
  components: {
    WelcomeComponent,
    HeaderComponent,
    DifferencesComponent,
    UploadFile
  }
}
</script>
