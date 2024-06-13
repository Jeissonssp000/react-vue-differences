<template>
  <div class="card vertical gap">
    <img v-if="item.img" class="cursor" :src="item.img" :alt="item.title">
    <h3 class="center">{{ item.title }}</h3>
    <p v-for="(text, index) in item.description" :key="index">{{ text }}</p>
    <ul v-if="item.list">
      <li v-for="(listItem, index) in item.list" :key="index">{{ listItem }}</li>
    </ul>
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
