<template>
  <section id="differences" class="gallery pad gap">
    <CardComponent v-for="item in items" :key="item.id" :item="item" />
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue"
import items from "../assets/data.json"

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