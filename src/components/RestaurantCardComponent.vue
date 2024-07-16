<script setup>
const restaurantDataProps = defineProps({
  id: Number,
  title: String,
  time: Number,
  rating: Number,
  type: String,
  price: Number,
  imagePath: String
});

</script>

<template>
  <router-link to="/tanuki">
    <div class="card">
      <div class="card-img">
        <img src="{{ restaurantDataProps.imagePath }}" alt="6">
      </div>
      <div class="card-description">
        <div class="card-name-box">
          <h3 class="card-name">{{ restaurantDataProps.title }}</h3>
          <div class="card-time">{{ restaurantDataProps.time }} мин</div>
        </div>
        <div class="card-info-box">
          <div class="card-rating">
            <img src="../assets/icons/star-icon.svg" alt="star icon">
            {{ restaurantDataProps.rating }}
          </div>
          <div class="card-price">От {{ restaurantDataProps.price }} &#8381; &bull; {{ restaurantDataProps.type }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>