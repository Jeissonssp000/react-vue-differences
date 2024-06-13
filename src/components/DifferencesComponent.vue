<template>
  <section id="differences" class="gallery pad gap max-1200">
    <CardComponent v-for="item in items" :key="item.id" :item="item" />
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue"
import { items } from "../assets/data.js"

export default {
  name: "DifferencesComponent",
  components: {
    CardComponent
  },
  mounted() { },
  data() {
    return {
      items: items
    };
  }
}
</script>