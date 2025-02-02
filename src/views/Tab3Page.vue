<template>
  <base-layout>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- <ExploreContainer name="Tab 2 page" /> -->
    </ion-content>
  </base-layout>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';
</script>