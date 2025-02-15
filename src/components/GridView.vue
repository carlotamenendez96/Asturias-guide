//GridView.vue
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
          
          <ion-button
            v-if="showFavoriteButton"
            class="favorite-button"
            fill="clear"
            @click.stop="toggleFavorite(item)"
          >
            <ion-icon
              :icon="isFavorite(item) ? heart : heartOutline"
              :color="isFavorite(item) ? 'danger' : 'light'"
              class="favorite-icon"
            ></ion-icon>
          </ion-button>

          <div class="category-overlay"></div>
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
import { IonContent, IonCard, IonButton, IonIcon, IonToast } from '@ionic/vue';
import { heart, heartOutline } from 'ionicons/icons';
import BaseLayout from '@/components/BaseLayout.vue';
import { useNavigationManager } from '@/utils/navigationManager';
import { useRouter } from 'vue-router';
import { useFavoritesStore } from '@/stores/favorites';
import { GridItem } from '@/types';


const props = defineProps<{
  items: GridItem[];
  showFavoriteButton?: boolean; // Nueva prop para controlar la visibilidad del botón de favoritos
}>();

const router = useRouter();
const loadedImages = ref<boolean[]>(new Array(props.items.length).fill(false));
const { goBack } = useNavigationManager();
const favoritesStore = useFavoritesStore();
const showToast = ref(false);
const toastMessage = ref('');

const imageLoaded = (index: number) => {
  loadedImages.value[index] = true;
};

const navigateTo = (route: string) => {
  router.push(route);
};

const toggleFavorite = async (item: GridItem) => {
  try {
    if (favoritesStore.isFavorite(item)) {
      await favoritesStore.removeFromFavorites(item);
      toastMessage.value = 'Eliminado de favoritos';
    } else {
      await favoritesStore.addToFavorites(item);
      toastMessage.value = 'Añadido a favoritos';
    }
    showToast.value = true;
  } catch (error) {
    console.error('Error al gestionar favoritos:', error);
    toastMessage.value = 'Error al gestionar favoritos';
    showToast.value = true;
  }
};

const isFavorite = (item: GridItem) => {
  return favoritesStore.isFavorite(item);
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
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  min-height: 100%;
  contain: content;
  background: white; /* Cambiado a blanco para consistencia */
}

.category-card {
  height: 200px; /* Altura reducida para mejor proporción */
  margin: 0;
  border-radius: 16px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  background-color: white;
  contain: content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  transition: opacity 0.3s ease;
}

.category-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: all 0.3s ease;
}

.category-image.loaded {
  opacity: 1;
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.5)
  );
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.category-title {
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-title h2 {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.favorite-button {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  --padding-start: 14px;
  --padding-end: 14px;
  --padding-top: 14px;
  --padding-bottom: 14px;
  --background: rgba(255, 255, 255, 0.2);
  --border-radius: 50%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.favorite-icon {
  font-size: 24px;
  transition: transform 0.2s ease;
}

/* Hover effects */
.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.category-card:hover .category-overlay {
  opacity: 0.5;
}

/* Active state */
.category-card:active {
  transform: scale(0.98);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .categories-container {
    background: var(--ion-background-color);
  }

  .category-card {
    background-color: var(--ion-background-color);
  }

  .category-placeholder {
    background: var(--ion-background-color-step-50);
  }
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .categories-container {
    padding: 20px;
    gap: 20px;
  }

  .category-card {
    height: 240px;
  }

  .category-title h2 {
    font-size: 1.6rem;
  }
}
</style>