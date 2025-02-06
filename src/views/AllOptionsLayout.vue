<!-- AllOptionsLayout.vue -->
<template>
    <ion-page>
      <ion-content>
        <router-view></router-view>
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
  </script>