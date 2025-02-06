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
  gap: 7px;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 5px;
}

.lang-btn img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
</style>