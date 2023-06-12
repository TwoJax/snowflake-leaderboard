import { createApp } from 'vue';
import { pinia } from '@/stores';

import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');
