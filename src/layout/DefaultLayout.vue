<template>
  <div class="wrapper-layout">
    <app-header />
    <slot />
  </div>
</template>

<script setup>
import AppHeader from '@/components/Base/AppHeader.vue';
</script>

<style lang="scss" scoped></style>
