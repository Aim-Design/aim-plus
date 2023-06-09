import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Button = () => import('./components/button.vue');
const Icon = () => import('./components/icon.vue');
const Input = () => import('./components/input.vue');

const routes: Array<RouteRecordRaw> = [
  { path: '/button', name: 'button', component: Button },
  { path: '/icon', name: 'icon', component: Icon },
  { path: '/input', name: 'input', component: Input }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
