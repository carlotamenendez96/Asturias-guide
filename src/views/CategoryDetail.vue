// CategoryDetail.vue
<template>
  <ion-page>
    <base-layout :showBackButton="true" @back="goBack">
      <ion-content :fullscreen="true" class="ion-padding-bottom">
        <div class="category-detail" v-if="item">
          <!-- Header Image with Parallax effect -->
          <div class="image-wrapper">
            <img :src="item.image" :alt="$t(item.title)" class="header-image"/>
            <div class="image-overlay"></div>
            <ion-button
              class="favorite-button"
              fill="clear"
              @click="toggleFavorite(item)"
            >
              <ion-icon
                :icon="isFavorite(item) ? heart : heartOutline"
                :color="isFavorite(item) ? 'danger' : 'light'"
                class="favorite-icon"
              ></ion-icon>
            </ion-button>
          </div>

          <!-- Content Card -->
          <div class="content-card">
            <div class="title-section">
              <h1>{{ $t(`${getItemId()}.title`) }}</h1>
              <p class="description">{{ $t(`${getItemId()}.description`) }}</p>
            </div>

            <!-- Sections with Modern Cards -->
            <div class="sections-grid">
              <div v-for="section in item.sections" 
                   :key="section" 
                   class="info-card"
                   :class="getCardClass(section)">
                <div class="card-header">
                  <ion-icon :icon="getSectionIcon(section)" class="section-icon"></ion-icon>
                  <h2>{{ $t(`${getItemId()}.sections.${section}.title`) }}</h2>
                </div>
                <p>{{ $t(`${getItemId()}.sections.${section}.content`) }}</p>
              </div>
              <div v-if="item?.location" class="info-card card-orange">
                <div class="card-header">
                  <ion-icon :icon="locationOutline" class="section-icon"></ion-icon>
                  <h2>{{ $t(`${getItemId()}.sections.location.title`) }}</h2>
                </div>
                <div class="map-container">
                  <iframe
                    :src="getGoogleMapsUrl"
                    width="100%"
                    height="300"
                    style="border:0;"
                    allowfullscreen=true
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
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
import { car, footsteps, restaurant } from 'ionicons/icons';
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
import { heart, heartOutline, locationOutline, informationCircle } from 'ionicons/icons';
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

const getGoogleMapsUrl = computed(() => {
  if (item.value?.location) {
    const { lat, lng } = item.value.location;
    return `https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=${lat},${lng}&zoom=15`;
  }
  return '';
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
const getSectionIcon = (section: string) => {
  const iconMap: { [key: string]: string } = {
    parking: car,
    access: footsteps,
    services: restaurant,
    tips: informationCircle  
  };
  return iconMap[section];
};

const getCardClass = (section: string) => {
  const classMap: { [key: string]: string } = {
    parking: 'card-blue',
    access: 'card-green',
    services: 'card-purple',
    tips: 'card-yellow' 
  };
  return classMap[section];
};

const isFavorite = (item: GridItem) => {
  return favoritesStore.isFavorite(item);
};
</script>

<style scoped>
.image-wrapper {
  position: relative;
  height: 45vh;
  overflow: hidden;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
}

.favorite-button {
  position: absolute;
  top: 20px;
  right: 20px;
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

.favorite-button:active .favorite-icon {
  transform: scale(1.2);
}

.content-card {
  margin-top: -50px;
  background: white;
  border-radius: 30px 30px 0 0;
  padding: 30px 20px;
  position: relative;
  z-index: 10;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
}

.title-section {
  padding: 0 10px 20px;
}

.title-section h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.description {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.sections-grid {
  display: grid;
  gap: 20px;
  padding: 10px 0;
}

.info-card {
  padding: 20px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.section-icon {
  font-size: 24px;
  margin-right: 12px;
}

.info-card h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.info-card p {
  margin: 0;
  line-height: 1.5;
}

/* Card Variants */
.card-blue {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.card-green {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.card-purple {
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.card-yellow {
  background: rgba(234, 179, 8, 0.1);
  border: 1px solid rgba(234, 179, 8, 0.2);
}

.card-orange {
  background: rgba(251, 146, 60, 0.1);
  border: 1px solid rgba(251, 146, 60, 0.2);
}

/* Hover Effects */
.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.map-container {
  margin-top: 15px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


/* Ajuste del iframe para modo oscuro */
@media (prefers-color-scheme: dark) {
  .map-container {
    border: 1px solid var(--ion-color-medium);
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .content-card {
    background: var(--ion-background-color);
  }

  .title-section h1 {
    color: var(--ion-color-light);
  }

  .description {
    color: var(--ion-color-medium);
  }
}
</style>