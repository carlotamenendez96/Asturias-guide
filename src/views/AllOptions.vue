<template>
  <grid-view :items="categories" />
</template>

<script setup lang="ts">
import GridView from '@/components/GridView.vue';


const categories = [
  {
    title: 'Home.categories.municipal',
    image: '/src/assets/img/municipal.jpg',
    route: '/municipal'
  },
  {
    title: 'Home.categories.accommodations',
    image: '/src/assets/img/alojamientos.jpg',
    route: '/alojamientos'
  },
  {
    title: 'Home.categories.vehicles',
    image: '/src/assets/img/vehiculos.jpg',
    route: '/vehiculos'
  },
  {
    title: 'Home.categories.beaches',
    image: '/src/assets/img/playas.jpg',
    route: '/playas'
  },
  {
    title: 'Home.categories.restaurants',
    image: '/src/assets/img/restaurantes.jpg',
    route: '/restaurantes'
  },
  {
    title: 'Home.categories.viewpoints',
    image: '/src/assets/img/miradores.jpg',
    route: '/miradores'
  },
  {
    title: 'Home.categories.arqueological',
    image: '/src/assets/img/arqueologicos.jpg',
    route: '/cultural'
  },
  {
    title: 'Home.categories.markets',
    image: '/src/assets/img/mercadillos.jpg',
    route: '/mercadillos'
  },
  {
    title: 'Home.categories.recreational',
    image: '/src/assets/img/naturaleza.jpg',
    route: '/naturaleza'
  },
  {
    title: 'Home.categories.camping',
    image: '/src/assets/img/camping.jpg',
    route: '/camping'
  },
  {
    title: 'Home.categories.museums',
    image: '/src/assets/img/museos.jpg',
    route: '/museos'
  },
  {
    title: 'Home.categories.turism',
    image: '/src/assets/img/turismo.jpg',
    route: '/turism'
  }
];

</script>

<style scoped>
.categories-container {
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100%;
}

.category-card {
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
  transform: translateZ(0);
  will-change: transform;
}

.category-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  transition: opacity 0.3s ease;
}

.category-placeholder.hidden {
  opacity: 0;
}

.category-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
  will-change: transform;
  transform: translateZ(0);
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

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
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