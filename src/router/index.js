import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import TanukiView from '../views/TanukiView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/tanuki',
      component: TanukiView,
    },
  ],
});

export default router;
