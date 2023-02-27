import { RouteRecordRaw } from "vue-router";
const tempComp = import.meta.glob('../template/**.vue');
const tempRoute = Object.keys(tempComp).map(path => {
  const route = {} as RouteRecordRaw;
  const strs = path.split('/');
  const name = strs[strs.length - 1].split('.')[0];
  route.name = name;
  route.path = `/temp/${name.toLocaleLowerCase()}`;
  route.component = tempComp[path];
  return route;
});

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: '/mall',
        name: 'Mall',
        component: () => import('@/pages/Mall.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/pages/My.vue')
      },
    ]
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('@/pages/Design.vue')
  },
  ...tempRoute
];

export default routes;
