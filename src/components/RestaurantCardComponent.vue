<script setup>
const props = defineProps({
  restaurantData: Object
});
</script>

<template>
  <router-link :to="`/restaurant/${restaurantData.slug}`">
    <div class="card">
      <div class="card-img">
        <img :src="restaurantData.imagePath" alt="restaurant photo">
      </div>
      <div class="card-description">
        <div class="card-name-box">
          <h3 class="card-name">{{ restaurantData.title }}</h3>
          <div class="card-time">{{ restaurantData.time }} мин</div>
        </div>
        <div class="card-info-box">
          <div class="card-rating">
            <img src="../assets/icons/star-icon.svg" alt="star icon">
            {{ restaurantData.rating }}
          </div>
          <div class="card-price">От {{ restaurantData.price }} руб &bull; {{ restaurantData.type }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  width: 384px;
  min-height: 380px;
  gap: 24px;
  margin-bottom: 30px;
  border-radius: 7px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  background: var(--gray---gray-1);
}

.card-img {
  width: 100%;
  height: 66%;
  overflow: hidden;
}

.card-description {
  padding: 20px 24px 34px 24px;
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
</style>