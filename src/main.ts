import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

import BaseLayout from '@/components/BaseLayout.vue';

import { createI18n } from 'vue-i18n'
import es from './lang/es'
import en from './lang/en'
import it from './lang/it'
import ger from './lang/ger'

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es: es,
    en: en,
    it: it,
    ger: ger
  },
  legacy: false,
  globalInjection: true
})


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(i18n);

app.component('base-layout', BaseLayout);

router.isReady().then(() => {
  app.mount('#app');
});
