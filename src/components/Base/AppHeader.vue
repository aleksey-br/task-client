<template>
  <div class="header">
    <div class="header__wrapper container">
      <div class="header__logo">
        <h3 class="logo__image">My Task</h3>
      </div>
      <button class="header__profile" @click="changeDropdown">
        <div class="profile__head">
          <span class="profile__user-name">Name</span>
          <div class="profile__user-avatar">
            N
            <!-- <img src="#" alt="avatar" /> -->
          </div>
          <!-- <v-icon
            class="profile__icon"
            :name="isDropdown ? 'ri-arrow-up-s-fill' : 'ri-arrow-down-s-fill'"
            scale="1"
          ></v-icon> -->
          <i :class="[{ 'icon-open': isDropdown }, { profile__icon: !isDropdown }]"></i>
        </div>
        <transition name="dropdown-fade">
          <div class="profile__dropdown" v-click-outside="changeDropdown" v-if="isDropdown">
            <ul class="dropdown__list">
              <li class="dropdown__item">Sing Out</li>
            </ul>
          </div>
        </transition>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDropdown = ref(false);

const changeDropdown = (e) => {
  isDropdown.value = !isDropdown.value;
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background: $bg-element;
  /* .header__wrapper */
  &__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* .header__logo */
  &__logo {
  }
  /* .header__profile */
  &__profile {
    position: relative;
    border: none;
    background: none;
    outline: none;
  }
}

.logo {
  /* .logo__image */
  &__image {
  }
}
.profile {
  /* .profile__head */
  &__head {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  /* .profile__user-name */
  &__user-name {
    @include _lg {
      display: none;
    }
  }
  /* .profile__user-avatar */
  &__user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: orange;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* .profile__icon */
  &__icon {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid $text-color;
    transition: 0.2s ease;
  }
  /* .profile__dropdown */
  &__dropdown {
    width: 100%;
    position: absolute;
    top: 50px;
    right: -5px;
    padding: 10px;
    border-radius: 5px;
    background: $bg-element;
    color: $text-color;
    box-shadow: 0px 4px 18px 2px rgba(37, 37, 37, 0.2);
  }
}
.dropdown {
  /* .dropdown__list */
  &__list {
    padding: 0;
    margin: 0;
  }
  /* .dropdown__item */
  &__item {
  }
}

.icon-open {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid $text-color;
  transition: 0.2s ease;
}

.dropdown-fade-enter-active {
  transition: all 0.3s ease-out;
}

.dropdown-fade-leave-active {
  transition: all 0.3s;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
