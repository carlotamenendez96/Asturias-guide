<!-- BaseLayout.vue -->
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons v-if="showBackButton" slot="start">
          <ion-back-button default-href="/tab1"></ion-back-button>
        </ion-buttons>
        <ion-title>Asturias Guide</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButtons,
  IonBackButton 
} from '@ionic/vue';

defineProps<{
  showBackButton?: boolean
}>();
</script>