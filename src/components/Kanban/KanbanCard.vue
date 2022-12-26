<template>
  <div class="card">
    <div class="card__wrapper">
      <h4 class="card__title">{{ item.title }}</h4>
      <div class="card__descr">{{ item.descr }}</div>
      <div class="card__time">
        <span class="time__create">create task: {{ item.create_time }}</span>
        <span class="time__release">deadline: {{ item.release_time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  /* .card__wrapper */
  &__wrapper {
  }
  /* .card__title */
  &__title {
    color: $text-color;
  }
  /* .card__descr */
  &__descr {
    // height: 50px;
    position: relative;
    font-size: 16px;
    color: $text-color;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  /* .card__time */
  &__time {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: $text-color-secondary;
  }
}
.time {
  /* .time__create */
  &__create {
  }
  /* .time__release */
  &__release {
  }
}
</style>
