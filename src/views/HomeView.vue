<template>
  <div class="home">
    <div class="home__wrapper container">
      <kanban-container />
    </div>
  </div>
</template>

<script>
import KanbanContainer from '@/components/Kanban/KanbanContainer.vue';

export default {
  components: { KanbanContainer },
};
</script>

<style lang="scss" scoped>
.home {
  /* .home__wrapper */
  &__wrapper {
    padding-top: 30px;
  }
}
</style>
