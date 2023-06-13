import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Button = () => import('./components/button.vue');
const Icon = () => import('./components/icon.vue');
const Input = () => import('./components/input.vue');
const Link = () => import('./components/link.vue');
const Upload = () => import('./components/upload.vue');

const routes: Array<RouteRecordRaw> = [
  { path: '/button', name: 'button', component: Button },
  { path: '/icon', name: 'icon', component: Icon },
  { path: '/input', name: 'input', component: Input },
  { path: '/link', name: 'link', component: Link },
  { path: '/upload', name: 'upload', component: Upload }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
