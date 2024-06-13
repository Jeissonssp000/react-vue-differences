<template>
  <div class="vertical align-center" style="width: 100%;">
    <WelcomeComponent />
    <DifferencesComponent />
  </div>
</template>

<script>
import WelcomeComponent from '../components/WelcomeComponent.vue'
import DifferencesComponent from '../components/DifferencesComponent.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeComponent,
    DifferencesComponent
  }
}
</script>
