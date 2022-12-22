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
</script>

<style lang="scss"></style>
