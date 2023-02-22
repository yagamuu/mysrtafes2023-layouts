import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import App from './Triple8x7/main.vue';

const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
