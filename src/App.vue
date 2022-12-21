<template>
  <component :is="layout">
    <RouterView></RouterView>
  </component>
</template>

<script setup>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import EmptyLayout from '@/layout/EmptyLayout.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => (route.meta.layout ? EmptyLayout : DefaultLayout));
console.log('ddd');
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  background: $bg;
}

nav {
  padding: 30px;
  background: $bg-element;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
