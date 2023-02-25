import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from '@/router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'element-plus/es/components/loading/style/css';
import 'element-plus/es/components/message-box/style/css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app
  .use(router)
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app');
