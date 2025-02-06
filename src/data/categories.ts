import {GridItem} from "@/types/index"
const baseCategories: GridItem[] =  [
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
]

export const categories: GridItem[] = baseCategories.map(category => ({
  ...category,
  route: `/all-options${category.route}`
}));