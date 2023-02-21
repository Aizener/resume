import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('@/pages/Design.vue')
  },
  {
    path: '/temp/base',
    name: 'Base',
    component: () => import('@/template/Base.vue')
  }
];

export default routes;
