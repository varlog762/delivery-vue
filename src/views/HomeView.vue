<script setup>
import { ref, onMounted } from 'vue';

import fetchDataService from '@/services/fetchDataService';
import RestaurantCardComponent from '@/components/RestaurantCardComponent.vue';

const restaurantsData = ref([]);
const isLoading = ref(true);
const error = ref(null);

const getAllRestaurantsData = async () => {
  try {
    const data = await fetchDataService.getData();
    restaurantsData.value = data;
  } catch (err) {
    error.value = err;
    throw error;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getAllRestaurantsData();
})
</script>

<template>
  <section class="promo">
    <div class="promo-info">
      <h1 class="promo-title">Онлайн-сервис<br>доставки еды на дом</h1>
      <p class="promo-text">Блюда из любимого ресторана привезет<br>курьер в перчатках, маске и с
        антисептиком
      </p>
    </div>
    <div class="promo-img"></div>
  </section>
  <section class="restaurants">
    <div class="restaurants-title-box">
      <h2 class="restaurants-title">Рестораны</h2>
      <div class="restaurants-search-box">
        <button type="button" class="restaurants-search-btn">
          <img src="../assets/icons/search-icon.svg" alt="search icon">
        </button>
        <input type="text" class="restaurants-search" placeholder="Поиск блюд и ресторанов">
      </div>
    </div>
    <div class="cards-box">
      <div v-for="restaurant in restaurantsData" :key="restaurant.id">
        <RestaurantCardComponent :restaurantData="restaurant"></RestaurantCardComponent>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo {
  position: relative;
  min-height: 300px;
  width: 100%;
  padding: 68px;
  border-radius: 10px;
  box-shadow: 0 7px 12px 0 rgba(158, 158, 163, 0.1);
  background: #fbf1b9;
  margin-bottom: 56px;
}

.promo-info {
  position: relative;
  z-index: 1;
}

.promo-title {
  font-weight: 700;
  font-size: 39px;
  color: #302c34;
  margin-bottom: 15px;
}

.promo-text {
  font-weight: 400;
  font-size: 24px;
  color: #302c34;
}

.promo-img {
  height: 100%;
  width: 60%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  background: url('../assets/images/promo-img.png') no-repeat center center / cover;
}

.restaurants-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 44px;
}

.restaurants-title {
  font-weight: 700;
  font-size: 36px;
  color: var(--gray---gray-10);
}

.restaurants-search-box {
  border: 1px solid var(--gray---gray-5);
  border-radius: 2px;
  background: var(--gray---gray-1);
  width: 306px;
  height: 34px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 5px 12px;
}

.restaurants-search-btn {
  padding: 1px;
  border: none;
  background-color: inherit;
  width: 18px;
  height: 18px;
}

.restaurants-search {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #bfbfbf;
  border: none;
  width: 90%;
  outline: none;
}

.restaurants-search::placeholder {
  color: #bfbfbf;
}

.cards-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
</style>