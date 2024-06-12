<template>
  <div class="card vertical gap">
    <img class="cursor" :src="item.img" :alt="item.title">
    <h3 class="center">{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 30%;
  object-fit: cover;
}
</style>
