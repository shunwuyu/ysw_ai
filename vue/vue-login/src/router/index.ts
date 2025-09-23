import {
  createRouter,
  createWebHistory
} from 'vue-router';
import { useUserStore } from '@/stores/user';

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log('路过....');
  const userStore = useUserStore();
  // console.log(userStore.isLogin, '//////')
  
  if(to.meta.requireAuth && !userStore.isLogin) {
    next('/login')
  } else {
    next();
  }
})

export default router