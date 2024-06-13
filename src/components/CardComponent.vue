<template>
  <div class="card vertical gap">
    <div v-if="item.img" class="img cursor center">
      <img class="transition" :src="item.img" :alt="item.title" :class="{ 'image-zoom': isActive }"
        @click="toggleClass">
    </div>
    <h3 class="center">{{ item.title }}</h3>
    <p v-for="(text, index) in item.description" :key="index">{{ text }}</p>
    <ul v-if="item.list">
      <li v-for="(listItem, index) in item.list" :key="index">{{ listItem }}</li>
    </ul>
    <h4 v-if="item.vueCode">Código en Vue</h4>
    <small v-if="item.vueCode">
      <pre>{{ item.vueCode }}</pre>
    </small>
    <h4 v-if="item.reactCode">Código en React</h4>
    <small v-if="item.reactCode">
      <pre>{{ item.reactCode }}</pre>
    </small>
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
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    }
  },
  data() {
    return {
      isActive: false
    };
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 200px;
}

.image-zoom {
  position: fixed;
  width: 80vw;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  scale: 1.1;
  object-fit: contain;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
