//CategoryDetail.vue
<template>
  <ion-page>
    <base-layout :showBackButton="true" @back="goBack">
      <ion-content :fullscreen="true">
        <div class="category-detail" v-if="item">
          <div class="image-container">
            <img :src="item.image" :alt="$t(item.title)" class="detail-image"/>
            <!-- Botón de favoritos -->
            <ion-button
              class="favorite-button"
              fill="clear"
              @click="toggleFavorite(item)"
            >
              <ion-icon
                :icon="isFavorite(item) ? heart : heartOutline"
                :color="isFavorite(item) ? 'danger' : 'light'"
                size="large"
              ></ion-icon>
            </ion-button>
          </div>

          <div class="content-container">
            <div class="description">
              <h2>{{ $t(`${getItemId()}.title`) }}</h2>
              <p>{{ $t(`${getItemId()}.description`) }}</p>
            </div>
            
            <div v-for="section in item.sections" :key="section" class="section">
              <h2>{{ $t(`${getItemId()}.sections.${section}.title`) }}</h2>
              <p>{{ $t(`${getItemId()}.sections.${section}.content`) }}</p>
            </div>
          </div>
        </div>
      </ion-content>
    </base-layout>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon
} from '@ionic/vue';
import { heart, heartOutline } from 'ionicons/icons';
import { GridItem, CategoryType } from '@/types';
import { useNavigationManager } from '@/utils/navigationManager';
import { useFavoritesStore } from '@/stores/favorites';
import { viewpoints } from '@/data/viewpoints';
import { beaches } from '@/data/beaches';
import { museums } from '@/data/museums';

interface CategoryData {
  data: GridItem[];
  backLink: string;
}

type CategoryDataMapType = {
  [K in CategoryType]: CategoryData;
};

const categoryDataMap: CategoryDataMapType = {
  'viewpoints': { data: viewpoints, backLink: '/viewpoints' },
  'beaches': { data: beaches, backLink: '/beaches' },
  'museos': { data: museums, backLink: '/museos' },
};

const { goBack } = useNavigationManager();
const favoritesStore = useFavoritesStore();

const getCategoryFromPath = (path: string): CategoryType | '' => {
  const matches = path.match(/\/([^/]+)/);
  return (matches ? matches[1] : '') as CategoryType | '';
};

const route = useRoute();
const currentCategory = getCategoryFromPath(route.path);

const defaultBackLink = computed(() => {
  if (currentCategory && categoryDataMap[currentCategory as CategoryType]) {
    return categoryDataMap[currentCategory as CategoryType].backLink;
  }
  return '/all-options';
});

const item = computed(() => {
  if (currentCategory && categoryDataMap[currentCategory as CategoryType]) {
    const categoryData = categoryDataMap[currentCategory as CategoryType].data;
    const id = route.params.id as string;
    return categoryData.find(item => item.route.endsWith(id));
  }
  return undefined;
});

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getItemId = () => {
  const capitalizedCategory = capitalizeFirstLetter(currentCategory);
  return `${capitalizedCategory}.${route.params.id}`;
}

const toggleFavorite = async (item: GridItem) => {
  try {
    if (favoritesStore.isFavorite(item)) {
      await favoritesStore.removeFromFavorites(item);
    } else {
      await favoritesStore.addToFavorites(item);
    }
  } catch (error) {
    console.error('Error al gestionar favoritos:', error);
  }
};

const isFavorite = (item: GridItem) => {
  return favoritesStore.isFavorite(item);
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
}

.detail-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  --padding-start: 8px;
  --padding-end: 8px;
  --background: rgba(0, 0, 0, 0.3);
  --border-radius: 50%;
}

.favorite-button:hover {
  --background: rgba(0, 0, 0, 0.5);
}

.content-container {
  padding: 20px;
}

.description {
  margin-bottom: 24px;
  line-height: 1.6;
}

.section {
  margin-bottom: 20px;
}

.section h2 {
  font-size: 1.4em;
  margin-bottom: 12px;
  color: var(--ion-color-primary);
}

.section p {
  line-height: 1.5;
}
</style>