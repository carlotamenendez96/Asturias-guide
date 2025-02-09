//TabsPage.vue
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="custom-tabs">
        <ion-tab-button 
          tab="tab1" 
          href="/tabs/tab1"
          class="tab-button"
          :class="{ 'active-tab': isActive('tab1') }"
        >
          <div class="icon-container">
            <ion-icon 
              aria-hidden="true" 
              :icon="home" 
              class="tab-icon"
            />
            <span class="tab-label">Home</span>
          </div>
        </ion-tab-button>

        <ion-tab-button 
          tab="tab2" 
          href="/tabs/tab2"
          class="tab-button"
          :class="{ 'active-tab': isActive('tab2') }"
        >
          <div class="icon-container">
            <ion-icon 
              aria-hidden="true" 
              :icon="heart" 
              class="tab-icon"
            />
            <span class="tab-label">Favorites</span>
          </div>
        </ion-tab-button>

        <ion-tab-button 
          tab="tab3" 
          href="/tabs/tab3"
          class="tab-button"
          :class="{ 'active-tab': isActive('tab3') }"
        >
          <div class="icon-container">
            <ion-icon 
              aria-hidden="true" 
              :icon="settings" 
              class="tab-icon"
            />
            <span class="tab-label">Settings</span>
          </div>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  IonIcon, 
  IonPage, 
  IonRouterOutlet 
} from '@ionic/vue';
import { heart, settings, home } from 'ionicons/icons';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentTab = ref('tab1');

const isActive = (tab: string) => {
  return currentTab.value === tab;
};

// Watch for route changes to update active tab
watch(
  () => route.path,
  (newPath) => {
    const tab = newPath.split('/')[2];
    if (tab) {
      currentTab.value = tab;
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.custom-tabs {
  --background: white;
  height: 65px;
  padding: 6px 10px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}

.tab-button {
  position: relative;
  --ripple-color: transparent;
  --background: transparent;
  transition: all 0.3s ease;
  border-radius: 12px;
  margin: 0 4px;
}

.tab-button::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 24px;
  height: 3px;
  background: var(--ion-color-primary);
  border-radius: 3px;
  transition: transform 0.3s ease;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 0;
}

.tab-icon {
  font-size: 24px;
  transition: all 0.3s ease;
  color: #666;
}

.tab-label {
  font-size: 12px;
  margin-top: 4px;
  transition: all 0.3s ease;
  color: #666;
  font-weight: 500;
}

/* Active tab styles */
.active-tab {
  --background: rgba(var(--ion-color-primary-rgb), 0.1);
}

.active-tab::before {
  transform: translateX(-50%) scaleX(1);
}

.active-tab .tab-icon,
.active-tab .tab-label {
  color: var(--ion-color-primary);
}

/* Hover states */
.tab-button:hover:not(.active-tab) {
  --background: rgba(var(--ion-color-primary-rgb), 0.05);
}

.tab-button:hover:not(.active-tab) .tab-icon,
.tab-button:hover:not(.active-tab) .tab-label {
  color: var(--ion-color-primary);
}

/* Press animation */
.tab-button:active {
  transform: scale(0.95);
}

/* Optional: Add support for dark mode */
@media (prefers-color-scheme: dark) {
  .custom-tabs {
    --background: var(--ion-background-color);
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
  }

  .tab-icon,
  .tab-label {
    color: var(--ion-color-medium);
  }

  .active-tab {
    --background: rgba(var(--ion-color-primary-rgb), 0.15);
  }
}
</style>