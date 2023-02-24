import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from '@/router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const app = createApp(App);

app
  .use(router)
  .use(createPinia())
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app');
