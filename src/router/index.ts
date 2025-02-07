import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'all-options',
        component: () => import('@/views/CategoryList.vue'),
        props: { categoryType: 'all' }
      },
      // Rutas de categorías dentro de tabs
      {
        path: '/miradores',
        component: () => import('@/views/CategoryList.vue'),
        props: { categoryType: 'miradores' }
      },
      {
        path: '/miradores/:id',
        component: () => import('@/views/CategoryDetail.vue'),
        props: true
      },
      {
        path: '/beaches',
        component: () => import('@/views/CategoryList.vue'),
        props: { categoryType: 'beaches' }
      },
      {
        path: '/beaches/:id',
        component: () => import('@/views/CategoryDetail.vue'),
        props: true
      },
      {
        path: '/museos',
        component: () => import('@/views/CategoryList.vue'),
        props: { categoryType: 'museos' }
      },
      {
        path: '/museos/:id',
        component: () => import('@/views/CategoryDetail.vue'),
        props: true
      }
      // Añadir más rutas de categorías aquí...
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;