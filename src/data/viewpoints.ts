import { GridItem } from "@/types/index"
export const viewpoints: GridItem[] =  [
  {
    title: 'Home.categories.viewpoints',
    image: '/src/assets/img/miradores.webp',
    route: '/miradores'
  },
  {
    title: 'Home.categories.beaches',
    image: '/src/assets/img/playas.webp',
    route: '/beaches'
  },
  {
    title: 'Home.categories.museums',
    image: '/src/assets/img/museos.webp',
    route: '/museos'
  }
]
// export const viewpoints: GridItem[] = baseviewpoints.map(category => ({
//   ...category,
//   route: `/tabs/miradores/${category.route}`
// }));