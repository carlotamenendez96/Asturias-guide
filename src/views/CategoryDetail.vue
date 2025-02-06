<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ item?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <div class="category-detail" v-if="item">
        <img :src="item.image" :alt="item.title" />
        <!-- Añade aquí el contenido del detalle -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
import { GridItem, CategoryType } from '@/types';
import { viewpoints } from '@/data/viewpoints';
import { beaches } from '@/data/beaches';
import { museums } from '@/data/museums';

interface CategoryData {
  data: GridItem[];
  backLink: string;
}

type CategoryDataMapType = {
  [K in CategoryType]: CategoryData;
};

const categoryDataMap: CategoryDataMapType = {
  'miradores': { data: viewpoints, backLink: '/miradores' },
  'playas': { data: beaches, backLink: '/playas' },
  'museos': { data: museums, backLink: '/museos' },
};

const getCategoryFromPath = (path: string): CategoryType | '' => {
  const matches = path.match(/\/([^/]+)/);
  return (matches ? matches[1] : '') as CategoryType | '';
};

const route = useRoute();
const currentCategory = getCategoryFromPath(route.path);

const defaultBackLink = computed(() => {
  if (currentCategory && categoryDataMap[currentCategory as CategoryType]) {
    return categoryDataMap[currentCategory as CategoryType].backLink;
  }
  return '/all-options';
});

const item = computed(() => {
  if (currentCategory && categoryDataMap[currentCategory as CategoryType]) {
    const categoryData = categoryDataMap[currentCategory as CategoryType].data;
    const id = route.params.id as string;
    return categoryData.find(item => item.route.endsWith(id));
  }
  return undefined;
});
</script>