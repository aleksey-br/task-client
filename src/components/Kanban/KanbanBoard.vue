<template>
  <div class="board">
    <div class="board__inner">
      <div class="board__list" v-for="board in boards" :key="board.id">
        <h3 class="board__title">{{ board.name }}</h3>
        <div class="board__task-list"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const boards = ref([
  { id: 1, name: 'ToDo', category: 'new' },
  { id: 2, name: 'Doing', category: 'doing' },
  { id: 3, name: 'Done', category: 'done' },
]);
</script>

<style lang="scss" scoped>
.board {
  /* .board__inner */
  &__inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
  /* .board__list */
  &__list {
    padding: 10px;
    background: $bg-element;
  }
  /* .board__title */
  &__title {
  }
  /* .board__task-list */
  &__task-list {
  }
}
</style>
