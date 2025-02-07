<template>
  <base-layout :showBackButton="false">
    <ion-content :fullscreen="true" class="ion-content-bg">
      <LanguagesContainer/>
    </ion-content>
  </base-layout>
</template>

<script setup lang="ts">
import { IonContent } from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';
import LanguagesContainer from '@/components/LanguagesContainer.vue';
</script>

<style scoped>
.ion-content-bg {
  --background: url('/src/assets/img/principal.webp') no-repeat center center / cover;
}
</style>