import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import TestView from '@/views/TestView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/restaurant/:slug',
      component: RestaurantView,
    },
    {
      path: '/test',
      component: TestView,
    },
  ],
});

export default router;
