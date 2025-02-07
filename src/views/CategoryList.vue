<template>
    <ion-page>
      <!-- <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button v-if="categoryType !== 'all'" default-href="/all-options"></ion-back-button>
          </ion-buttons>
          <ion-title>{{ pageTitle }}</ion-title>
        </ion-toolbar>
      </ion-header> -->
      
      <ion-content>
        <GridView :items="categoryItems" />
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonButtons,
    IonBackButton 
  } from '@ionic/vue';
  import GridView from '@/components/GridView.vue';
  import { GridItem } from '@/types';
  import { categories } from '@/data/categories';
  import { viewpoints } from '@/data/viewpoints';
  import { beaches } from '@/data/beaches';
  import { museums } from '@/data/museums';
  
  const props = defineProps<{
    categoryType: string
  }>();

  const categoryMap: { [key: string]: GridItem[] } = {
    'all': categories,
    'miradores': viewpoints,
    'beaches': beaches,
    'museos': museums,
  };
  
  const categoryItems = computed(() => {
    return categoryMap[props.categoryType] || [];
  });
  
  const pageTitle = computed(() => {
    const titles: { [key in typeof props.categoryType]: string } = {
      'all': 'Todas las Categorías',
      'miradores': 'Miradores',
      'beaches': 'Beaches',
      'museos': 'Museos',
    };
    return titles[props.categoryType] || '';
  });
  </script>