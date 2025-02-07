import { useIonRouter } from '@ionic/vue';
import { useRouter } from 'vue-router';

export function useNavigationManager() {
  const ionRouter = useIonRouter();
  const router = useRouter();
  
  const goBack = async () => {
    // Primero hacemos scroll al top
    const el = document.querySelector('ion-content');
    if (el) {
      await (el as any).scrollToTop(300);
    }
    
    // Pequeña pausa para el scroll
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Si podemos ir atrás en el historial de Ionic
    if (ionRouter.canGoBack()) {
      ionRouter.back();
    } else {
      // Si no hay historial, volvemos a una ruta por defecto
      router.push('/tabs/tab1');
    }
  };

  return {
    goBack
  };
}