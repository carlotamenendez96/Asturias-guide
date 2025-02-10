<!-- Template principal -->
<template>
  <base-layout :showBackButton="false">
    <ion-content :fullscreen="true" class="ion-content-bg">
      <!-- Overlay oscuro para mejorar legibilidad -->
      <div class="overlay"></div>
      
      <!-- Contenedor principal -->
      <div class="main-container">
        <!-- Título principal con animación -->
        <div class="title-container">
          <h1 class="main-title">Asturias</h1>
          <p class="subtitle">Paraíso Natural</p>
        </div>

        <!-- Contenedor de idiomas -->
        <LanguagesContainer/>
      </div>
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
}

.main-container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
}

.title-container {
  text-align: center;
  margin-top: 15%;
  animation: fadeInDown 1.2s ease-out;
}

.main-title {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  letter-spacing: 2px;
}

.subtitle {
  color: white;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  letter-spacing: 1px;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>