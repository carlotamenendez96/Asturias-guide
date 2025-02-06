import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

// Definir los tipos de categorías disponibles
type CategoryType = 'miradores' | 'playas' | 'museos';

// Función helper para crear rutas de categoría
const createCategoryRoutes = (category: CategoryType): RouteRecordRaw[] => [
  {
    path: category,
    component: () => import('@/views/CategoryList.vue'),
    props: { categoryType: category }
  },
  {
    path: `${category}/:id`,
    component: () => import('@/views/CategoryDetail.vue'),
    props: true
  }
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tab1'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
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
        component: () => import('@/views/AllOptionsLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/CategoryList.vue'),
            props: { categoryType: 'all' }
          },
          ...createCategoryRoutes('miradores'),
          ...createCategoryRoutes('playas'),
          ...createCategoryRoutes('museos')
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;