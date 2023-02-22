import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import App from './Single17x13/main.vue';

const app = createApp(App);
const head = createHead();
app.use(head);
app.mount('#app');
