<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ModalComponent from './components/ModalComponent.vue'

const isOpen = ref(false);

const handleToggleModal = () => isOpen.value = !isOpen.value;

</script>

<template>
  <div class="page-wrapper" :class="{ 'modal-open': isOpen }">
    <HeaderComponent @openModal="handleToggleModal()" />
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <ModalComponent :isOpen="isOpen" @closeModal="handleToggleModal()" />
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
.main {
  flex-grow: 1;
  background: linear-gradient(180deg,
      rgba(245, 245, 245, 0) 1.04%,
      #f5f5f5 100%);
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.page-wrapper.modal-open {
  height: 100vh;
  overflow: hidden;
}
</style>