import { createApp } from 'vue';
import App from './app.vue';
import Aim from '../packages/index';

const app = createApp(App);

app.use(Aim);

app.mount('#app');
