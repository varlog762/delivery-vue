<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import fetchDataService from '@/services/fetchDataService';
import ProductCardComponent from '@/components/ProductCardComponent.vue';
import LoadingSpinnerComponent from '@/components/LoadingSpinnerComponent.vue';

const route = useRoute();
const slug = route.params.slug;

const restaurantData = ref({});
const productsData = ref([]);
const isLoading = ref(true);
const errorText = ref(null);

const getRestaurantData = async () => {
  try {
    const data = await fetchDataService.getDataBySlug(slug);
    restaurantData.value = data;
    productsData.value = data.products ?? [];
  } catch (error) {
    errorText.value = error;
    throw error;
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  getRestaurantData();
})
</script>

<template>
  <section class="restaurants">
    <div v-if="restaurantData.price">
      <div class="restaurants-title-box flex-content-start">
        <h2 class="restaurants-title">{{ restaurantData.title }}</h2>
        <div class="restaurant-rating"><img src="../assets/icons/star-icon.svg" alt="star icon">4.5</div>
        <div class="restaurant-price">От {{ restaurantData.price }} руб &bull; {{ restaurantData.type }}</div>
      </div>
    </div>
    <div v-if="isLoading">
      <LoadingSpinnerComponent />
    </div>
    <div v-if="errorText">
      {{ errorText }}
    </div>
    <div class="cards-box">
      <div v-for="product in productsData" :key="product.id">
        <ProductCardComponent :productDataProps="product" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.restaurants-title-box {
  display: flex;
  justify-content: flex-start;
  gap: 28px;
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