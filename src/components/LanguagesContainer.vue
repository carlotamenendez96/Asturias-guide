<template>
  <div id="container">
    <div class="language-buttons">
      <ion-button @click="handleLanguageChange('es')" fill="clear" class="lang-btn">
        <img src="@/assets/flags/es.png" alt="Español" />
      </ion-button>
      <ion-button @click="handleLanguageChange('en')" fill="clear" class="lang-btn">
        <img src="@/assets/flags/en.png" alt="English" />
      </ion-button>
      <ion-button @click="handleLanguageChange('it')" fill="clear" class="lang-btn">
        <img src="@/assets/flags/it.png" alt="Italiano" />
      </ion-button>
      <ion-button @click="handleLanguageChange('ger')" fill="clear" class="lang-btn">
        <img src="@/assets/flags/ger.png" alt="Deutsch" />
      </ion-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonButton, useIonRouter  } from '@ionic/vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const router = useIonRouter();

const handleLanguageChange = async (lang: string) => {
  // Primero cambiamos el idioma
  locale.value = lang;
  
  // Navegamos usando el IonRouter
  router.navigate('/tabs/all-options', 'forward');
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 70%;
  transform: translateY(-50%);
}

.language-buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 25px;
  margin: 0 20px;
}

.lang-btn {
  --background: transparent;
  --background-hover: transparent;
  --background-activated: transparent;
  --ripple-color: rgba(255, 255, 255, 0.2);
  --padding-start: 8px;
  --padding-end: 8px;
  height: 45px;
  position: relative;
  transition: transform 0.2s ease;
}

.lang-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.2s ease;
}

.lang-btn:hover::before {
  transform: scale(1);
}

.lang-btn img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.lang-btn:hover img {
  transform: scale(1.1);
  border-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Estilo activo para el botón del idioma seleccionado */
.lang-btn.active img {
  border-color: #ffffff;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
}

@media (max-width: 340px) {
  .language-buttons {
    gap: 8px;
    padding: 8px;
  }

  .lang-btn img {
    width: 28px;
    height: 28px;
  }
}
</style>