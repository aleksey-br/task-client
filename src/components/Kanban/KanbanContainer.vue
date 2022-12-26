<template>
  <div class="kanban">
    <SlickList
      v-model:list="todosStore.boards"
      axis="x"
      class="kanban__wrapper"
      use-drag-handle
      useWindowAsScrollContainer
    >
      <SlickItem
        class="kanban__boards"
        v-for="(list, i) in todosStore.getFullList"
        :key="list.id"
        :index="i"
      >
        <header class="board__head">
          <h4 class="board__title">
            {{ list.name }}
          </h4>
          <DragHandle>
            <awesome-icon icon="fa-bars"></awesome-icon>
          </DragHandle>
        </header>
        <SlickList class="kanban__list" axis="y" v-model:list="list.items" group="tasks">
          <SlickItem
            v-for="(task, indx) in list.items"
            :key="task.id"
            :index="indx"
            class="kanban__item"
          >
            <KanbanCard :item="task" />
          </SlickItem>
        </SlickList>
      </SlickItem>
    </SlickList>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodosStore } from '@/store/useTodosStore';
import { SlickList, SlickItem, DragHandle } from 'vue-slicksort';
import KanbanCard from './KanbanCard.vue';

const todosStore = useTodosStore();
console.log(todosStore.getFullList);
</script>

<style lang="scss" scoped>
.kanban {
  // overflow: auto;
  /* .kanban__wrapper */
  &__wrapper {
    display: flex;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-auto-rows: max-content;
    // grid-auto-flow: column;
    gap: 20px;
  }
  /* .kanban__boards */
  &__boards {
    // width: 380px;
    // min-width: 260px;
    // flex: 0 1 380px;
    padding: 10px;
    background: $bg-element;
  }
  /* .kanban__list */
  &__list {
    min-height: 50px;
  }
  /* .kanban__item */
  &__item {
    padding: 10px;
    border-radius: 5px;
    background: $bg-element;
    box-shadow: 0px 4px 18px 2px rgba(37, 37, 37, 0.2);
  }
}
.board {
  /* .board__head */
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  /* .board__title */
  &__title {
    margin: 0;
  }
  /* .board__icon */
  &__icon {
  }
}
</style>
