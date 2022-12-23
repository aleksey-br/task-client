<template>
  <div class="kanban">
    <!-- <SlickList
      v-model:list="lists"
      :axis="axis"
      :lock-axis="axis"
      class="kanban__wrapper"
      use-drag-handle
      useWindowAsScrollContainer
    >
      <SlickItem v-for="(list, i) in lists" :key="list.id" :index="i" class="kanban__board">
        <header class="kanban__head">
          <DragHandle />
          {{ list.name }}
          ({{ list.items.length }})
        </header>
        <SlickList
          v-model:list="list.items"
          axis="xy"
          :group="list.group"
          class="kanban__list"
          helper-class="kanban-helper"
        >
          <SlickItem v-for="(item, j) in list.items" :key="item.id" :index="j" class="kanban__item">
            <div class="kanban-list-item-inner">
              {{ item.value }}
            </div>
          </SlickItem>
        </SlickList>
      </SlickItem>
    </SlickList> -->
    <SlickList v-model:list="lists" axis="xy" class="kanban__wrapper" use-drag-handle>
      <SlickItem class="kanban__boards" v-for="(list, i) in lists" :key="list.id" :index="i">
        <header class="board__head">
          <h4 class="board__title">
            {{ list.name }}
          </h4>
          <DragHandle>
            <v-icon class="board__icon" name="gi-hamburger-menu" />
          </DragHandle>
        </header>
        <SlickList class="kanban__list" axis="y" v-model:list="list.items" group="tasks">
          <SlickItem
            v-for="(task, indx) in list.items"
            :key="task.id"
            :index="indx"
            class="kanban__item"
            >{{ task.value }}</SlickItem
          >
        </SlickList>
      </SlickItem>
    </SlickList>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import KanbanBoard from './KanbanBoard.vue';
import { SlickList, SlickItem, DragHandle } from 'vue-slicksort';

const lists = ref([
  {
    id: 148,
    name: 'List A',
    group: 'a',
    accept: ['b'],
    items: [
      {
        value: 'Item 1',
        height: 59,
        background: '#eb5757',
        id: 149,
      },
      {
        value: 'Item 2',
        height: 97,
        background: '#9b51e1',
        id: 150,
      },
      {
        value: 'Item 3',
        height: 51,
        background: '#58cbf2',
        id: 151,
      },
    ],
  },
  {
    id: 152,
    name: 'List B',
    group: 'b',
    accept: true,
    items: [
      {
        value: 'Item 1',
        height: 84,
        background: '#eb5757',
        id: 153,
      },
      {
        value: 'Item 2',
        height: 69,
        background: '#9b51e1',
        id: 154,
      },
      {
        value: 'Item 3',
        height: 110,
        background: '#58cbf2',
        id: 155,
      },
    ],
  },
  {
    id: 156,
    name: 'List C',
    group: 'c',
    accept: ['b'],
    items: [
      {
        value: 'Item 1',
        height: 84,
        background: '#eb5757',
        id: 157,
      },
      {
        value: 'Item 2',
        height: 93,
        background: '#9b51e1',
        id: 158,
      },
      {
        value: 'Item 3',
        height: 63,
        background: '#58cbf2',
        id: 159,
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
// .kanban {
//   /* .kanban__wrapper */
//   &__wrapper {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//     grid-auto-rows: auto;
//     gap: 20px;
//   }
//   /* .kanban__boards */
//   &__boards {
//     padding: 10px;
//     background: $bg-element;
//   }
//   /* .kanban__board-title */
//   &__board-title {
//     display: flex;
//     justify-content: space-between;
//   }
//   /* .kanban__list */
//   &__list {
//     min-height: 50px;
//   }
//   /* .kanban__item */
//   &__item {
//   }
// }
// .board {
//   /* .board__head */
//   &__head {
//     display: flex;
//     justify-content: space-between;
//   }
// }

.kanban {
  /* .kanban__wrapper */
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-auto-rows: max-content;
    gap: 20px;
  }
  /* .kanban__boards */
  &__boards {
    padding: 10px;
    background: $bg-element;
  }
  /* .kanban__list */
  &__list {
    min-height: 50px;
  }
  /* .kanban__item */
  &__item {
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
