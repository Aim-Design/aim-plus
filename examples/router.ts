import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Button = () => import('./components/button.vue');

const routes: Array<RouteRecordRaw> = [
  { path: '/button', name: 'button', component: Button }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
