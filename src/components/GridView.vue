// GridView.vue
<template>
  <base-layout :showBackButton="true" @back="goBack">
    <ion-content :fullscreen="true">
      <div class="categories-container">
        <ion-card
          v-for="(item, index) in items"
          :key="index"
          class="category-card"
          @click="navigateTo(item.route)"
        >
          <div 
            class="category-placeholder"
            :class="{ 'hidden': loadedImages[index] }"
          ></div>
          
          <img
            :src="item.image"
            :alt="$t(item.title)"
            class="category-image"
            :class="{ 'loaded': loadedImages[index] }"
            @load="imageLoaded(index)"
            :fetchpriority="index < 2 ? 'high' : 'auto'"
            :loading="index < 2 ? 'eager' : 'lazy'"
            decoding="async"
          />
          
          <div class="category-title">
            <h2>{{ $t(item.title) }}</h2>
          </div>
        </ion-card>
      </div>
    </ion-content>
  </base-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonContent, IonCard } from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';
import { useNavigationManager } from '@/utils/navigationManager';
import { useRouter } from 'vue-router';

interface GridItem {
  title: string;
  image: string;
  route: string;
}

// Definir las props
const props = defineProps<{
  items: GridItem[];
}>();

const router = useRouter();
const loadedImages = ref<boolean[]>(new Array(props.items.length).fill(false));
const { goBack } = useNavigationManager();

const imageLoaded = (index: number) => {
  loadedImages.value[index] = true;
};

const navigateTo = (route: string) => {
  router.push(route);
};

onMounted(() => {
  const preloadImages = props.items.slice(0, 2);
  preloadImages.forEach((item, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = item.image;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
});
</script>

<style scoped>

.categories-container {
  scroll-behavior: smooth;
}
.categories-container {
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100%;
  contain: content;
}

.category-card {
  transform: translateZ(0);
  will-change: transform;
  height: 280px;
  margin: 0;
  border-radius: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background-color: #f0f0f0;
  contain: content;
}

.category-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  transition: opacity 0.3s ease;
}

.category-placeholder.hidden {
  opacity: 0;
}

.category-image {
  aspect-ratio: 16/9;
  will-change: opacity;
  transform: translateZ(0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-image.loaded {
  opacity: 1;
}

.category-title {
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  padding: 20px 0;
  position: relative;
  z-index: 1;
}

.category-title h2 {
  color: white;
  font-size: 1.8em;
  font-weight: 400;
  text-align: center;
  font-family: "Times New Roman", serif;
  margin: 0;
  padding: 10px 20px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

ion-card {
  --background: transparent;
  box-shadow: none;
}

ion-content {
  --padding-start: 0;
  --padding-end: 0;
}

ion-card + ion-card {
  margin-top: 0;
}

.category-card:active {
  transform: scale(0.98);
}
</style>