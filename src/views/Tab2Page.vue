//Tab2Page.vue
<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <!-- Mensaje cuando no hay favoritos -->
      <div v-if="favorites.length === 0">
        <base-layout :showBackButton="true" @back="goBack">
          <div class="empty-state">
            <ion-icon :icon="heartOutline" size="large"></ion-icon>
            <p> {{ $t('Home.no_favorite') }}</p>
        </div>
      </base-layout>
      </div>

      <!-- GridView con los favoritos -->
      <GridView v-else :items="favorites" :showFavoriteButton="true" />
    </ion-content>
  <!-- </base-layout> -->
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
import { heartOutline } from 'ionicons/icons';
import BaseLayout from '@/components/BaseLayout.vue';
import GridView from '@/components/GridView.vue';
import { useNavigationManager } from '@/utils/navigationManager';
import { useFavoritesStore } from '@/stores/favorites';
import { storeToRefs } from 'pinia';

const { goBack } = useNavigationManager();

// Obtener el store de favoritos
const favoritesStore = useFavoritesStore();
// Usar storeToRefs para mantener la reactividad
const { favorites } = storeToRefs(favoritesStore);
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  color: var(--ion-color-medium);
}

.empty-state ion-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-state p {
  font-size: 1.2em;
  margin: 0;
}
</style>