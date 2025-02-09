<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultBackLink" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>{{ item ? $t(item.title) : '' }}</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <base-layout :showBackButton="true" @back="goBack">
      <ion-content :fullscreen="true">
        <div class="category-detail" v-if="item">
          <img :src="item.image" :alt="$t(item.title)" class="detail-image"/>
          <div class="content-container">
            <div class="description">
              <h2>{{ $t(`${getItemId()}.title`) }}</h2>
              <p>{{ $t(`${getItemId()}.description`) }}</p>
            </div>
            
            <div v-for="section in item.sections" :key="section" class="section">
              <h2>{{ $t(`${getItemId()}.sections.${section}.title`) }}</h2>
              <p>{{ $t(`${getItemId()}.sections.${section}.content`) }}</p>
            </div>
          </div>
        </div>
      </ion-content>
    </base-layout>
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
import { useNavigationManager } from '@/utils/navigationManager';
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
  'viewpoints': { data: viewpoints, backLink: '/viewpoints' },
  'beaches': { data: beaches, backLink: '/beaches' },
  'museos': { data: museums, backLink: '/museos' },
};

const { goBack } = useNavigationManager();

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
 
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getItemId = () => {
  const capitalizedCategory = capitalizeFirstLetter(currentCategory);
  return `${capitalizedCategory}.${route.params.id}`;
}
 </script>
 
 <style scoped>
 .detail-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
 }
 
 .content-container {
  padding: 20px;
 }
 
 .description {
  margin-bottom: 24px;
  line-height: 1.6;
 }
 
 .section {
  margin-bottom: 20px;
 }
 
 .section h2 {
  font-size: 1.4em;
  margin-bottom: 12px;
  color: var(--ion-color-primary);
 }
 
 .section p {
  line-height: 1.5;
 }
 </style>

