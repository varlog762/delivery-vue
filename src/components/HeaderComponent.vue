<script setup>
const emit = defineEmits(['openModal']);

const openModal = () => emit('openModal');

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-box">
        <router-link to="/">
          <div class="logo header-logo">
            <div class="logo-img"><img src="../assets/icons/logo.svg" alt="logo"></div>
            <div class="logo-title">Food<br>Delivery</div>
          </div>
        </router-link>
        <div class="header-controls">
          <button type="button" class="btn primary-btn">
            <img src="../assets/icons/user.svg" alt="user icon" class="user-icon icon">
            Войти
          </button>
          <button type="button" class="btn outline-btn" @click="openModal()">
            <img src="../assets/icons/cart.svg" alt="cart logo" class="user-icon icon">
            Корзина</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 124px;
  display: flex;
  align-items: center;
}

.header-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.header-controls {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
}
</style>