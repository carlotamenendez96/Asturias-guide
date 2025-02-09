<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="header-toolbar">
        <ion-buttons v-if="showBackButton" slot="start">
          <ion-back-button default-href="/tabs/tab1" text="" class="custom-back-button"></ion-back-button>
        </ion-buttons>
        <ion-title class="header-title">Asturias Guide</ion-title>
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

<style scoped>
/* Opción 1: Diseño Moderno con Transparencia */
.header-toolbar {
  --background: rgba(255, 255, 255, 0.8);
  --color: #1a1a1a;
  --border-style: none;
  --min-height: 60px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
}

.custom-back-button {
  --color: #1a1a1a;
  --icon-font-size: 24px;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

/* Soporte para modo oscuro */
@media (prefers-color-scheme: dark) {
  .header-toolbar {
    --background: rgba(26, 26, 26, 0.8);
    --color: white;
  }

  .custom-back-button {
    --color: white;
  }
}
</style>