<template>
  <base-layout>
    <ion-content :fullscreen="true">
      <div class="categories-container">
        <ion-card 
          v-for="(category, index) in categories" 
          :key="index"
          class="category-card"
          :style="{ backgroundImage: `url(${category.image})` }"
          @click="navigateTo(category.route)"
        >
          <div class="category-title">
            <h2>{{ category.title }}</h2>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </base-layout>
</template>

<script setup lang="ts">
import { IonContent, IonCard } from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = [
  {
    title: 'GUÍA MUNICIPAL',
    image: '/src/assets/img/municipal.jpg',
    route: '/municipal'
  },
  {
    title: 'ALOJAMIENTOS',
    image: '/src/assets/img/alojamientos.jpg',
    route: '/alojamientos'
  },
  {
    title: 'ALQUILER DE VEHICULOS',
    image: '/src/assets/img/vehiculos.jpg',
    route: '/vehiculos'
  },
  {
    title: 'PLAYAS',
    image: '/src/assets/img/playas.jpg',
    route: '/playas'
  }
];

const navigateTo = (route: string) => {
  router.push(route);
};
</script>

<style scoped>
.categories-container {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0;
  height: 100%;
}

.category-card {
  height: 200px;
  margin: 0;
  border-radius: 0;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.category-title {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}

.category-title h2 {
  color: white;
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  font-family: "Times New Roman", serif;
  margin: 0;
  padding: 20px;
}

/* Ajuste para quitar los bordes por defecto de ion-card */
ion-card {
  --background: transparent;
  box-shadow: none;
}

/* Para asegurar que el contenido ocupe toda la pantalla */
ion-content {
  --padding-start: 0;
  --padding-end: 0;
}
</style>