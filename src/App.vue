<script setup>
import { RouterLink, RouterView } from 'vue-router';

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import ModalComponent from './components/ModalComponent.vue'
</script>

<template>
  <div class="page-wrapper">
    <HeaderComponent></HeaderComponent>
    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <ModalComponent />
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
</style>