import { createApp } from 'vue';
import App from './app.vue';
import AimPlus from '../packages/components/index';
// import AimPlus from 'aim-plus';
// console.log('🚀 ~ file: main.ts:5 ~ AimPlus:', AimPlus);

const app = createApp(App);

app.use(AimPlus);

app.mount('#app');
