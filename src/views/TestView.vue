<script setup>
import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();
</script>

<template>
  <h1>{{ cartStore.productsInCart }}</h1>
  <div class="comtrols-box">
    <button type="button" class="btn primary-btn" @click="cartStore.increment()">Increment</button>
    <button type="button" class="btn outline-btn" @click="cartStore.decrement()">Decrement</button>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}

.comtrols-box {
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>