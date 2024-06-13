<template>
  <section id="differences" class="gallery pad gap max-1200">
    <CardComponent v-for="item in items" :key="item.id" :item="item" />
    <CardVueCode />
    <CardReactCode />
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue"
import CardVueCode from "./CardVueCode.vue"
import CardReactCode from "./CardReactCode.vue"
import items from "../assets/data.json"

export default {
  name: "DifferencesComponent",
  components: {
    CardComponent,
    CardVueCode,
    CardReactCode
  },
  mounted() { },
  data() {
    return {
      items: items
    };
  }
}
</script>