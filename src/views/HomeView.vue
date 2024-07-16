<script setup>
import { ref, onMounted } from 'vue';

import fetchDataService from '@/services/fetchDataService';

const API_URL = '/src/assets/json/rests.json';

const restaurantsData = ref([]);
const isLoading = ref(true);
const error = ref(null);

const getRestaurantsData = async () => {
  try {
    const data = await fetchDataService.getData(API_URL);
    restaurantsData.value = data;
  } catch (error) {
    throw error;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getRestaurantsData();
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
    <div id="cards-box" class="cards-box">
      <router-link to="/tanuki">
        <div class="card">
          <div class="card-img">
            <img src="../assets/images/1.jpg" alt="6">
          </div>
          <div class="card-description">
            <div class="card-name-box">
              <h3 class="card-name">Name</h3>
              <div class="card-time">50 мин</div>
            </div>
            <div class="card-info-box">
              <div class="card-rating"><img src="../assets/icons/star-icon.svg" alt="star icon">4.7</div>
              <div class="card-price">От 1000 &#8381; &bull; Пицца </div>
            </div>
          </div>
        </div>
      </router-link>
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

.card {
  width: 384px;
  min-height: 380px;
  gap: 24px;
  margin-bottom: 30px;
  border-radius: 7px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  background: var(--gray---gray-1);
}

.food-card {
  min-height: 412px;
}

.card-img {
  width: 100%;
  height: 66%;
  overflow: hidden;
}

.food-card-img {
  height: 52%;
}

.card-description {
  padding: 20px 24px 34px 24px;
}

.food-card-description {
  font-weight: 400;
  font-size: 18px;
  color: var(--gray---gray-7);
  margin-bottom: 25px;
}

.food-card-info-wrapper {
  padding: 24px 24px 30px 24px;
}

.card-name-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.card-name {
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: var(--gray---gray-10);
}

.food-card-title {
  font-weight: 400;
  margin-bottom: 10px;
}

.card-time {
  border-radius: 2px;
  padding: 1px 8px;
  min-width: 56px;
  height: 22px;
  background: var(--gray---gray-9);
  font-weight: 400;
  font-size: 12px;
  line-height: 167%;
  color: var(--gray---gray-1);
}

.card-info-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 26px;
}

.card-rating {
  font-weight: 700;
  font-size: 18px;
  line-height: 178%;
  color: #ffc107;
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-price {
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  color: var(--gray---gray-7);
}

.food-card-price {
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: var(--gray---gray-10);
}

.restaurant-rating {
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 178%;
  color: #ffc107;
  display: flex;
  align-items: center;
  gap: 7.5px;
}

.restaurant-price {
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  color: var(--gray---gray-7);
}

.cart-modal__overlay {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
}

.cart-modal__overlay.open {
  display: block;
}

.cart-modal {
  position: relative;
  padding: 40px 46px;
  max-width: 780px;
  min-height: 100px;
  border-radius: 5px;
  background: var(--gray---gray-1);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.cart-modal__title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
}

.product-name {
  font-weight: 400;
  font-size: 18px;
  line-height: 178%;
  color: var(--gray---gray-10);
}

.close-btn {
  padding: 10px;
  background: inherit;
}

.cart-modal__products-list {
  margin-bottom: 53px;
}

.cart-modal__products-list ul li {
  margin-bottom: 15px;
}

.cart-modal__product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 10px 0;
  border-bottom: 1px solid var(--gray---gray-5);
}

.product-controls-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 47px;
}

.product-price {
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: var(--gray---gray-10);
}

.product-btns-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.product-count {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: var(--gray---gray-10);
}

.cart-modal-btn {
  min-width: 32px;
  border: 1px solid var(--daybreak-blue---blue-5);
  border-radius: 2px;
  padding: 5px 16px;
  background: var(--gray---gray-1);
  color: var(--daybreak-blue---blue-5);
}

.cart-modal__total-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-modal__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.cart-modal__total-sum {
  border-radius: 5px;
  padding: 15px 20px;
  min-height: 53px;
  background: var(--gray---gray-9);
  font-weight: 700;
  font-size: 20px;
  color: var(--gray---gray-2);
}
</style>