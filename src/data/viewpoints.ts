import { GridItem } from "@/types/index"
export const viewpoints: GridItem[] =  [
  {
    title: 'Viewpoints.mirador-del-sablon.title',
    image: '/src/assets/img/miradores.webp',
    route: '/viewpoints/mirador-del-sablon',
    sections: [
      'parking',
      'access', 
      'services'
    ]
  },
  {
    title: 'Viewpoints.mirador-de-san-roque.title',
    image: 'https://i.imgur.com/KoyBxI9.jpeg',
    route: '/viewpoints/mirador-de-san-roque',
    sections: [
      'parking',
      'access', 
      'services'
   ]
  },
  {
    title: 'Viewpoints.mirador-del-fitu.title',
    image: 'https://i.imgur.com/kixIuxV.jpeg',
    route: '/viewpoints/mirador-del-fitu',
    sections: [
      'parking',
      'access', 
      'services'
    ]
  }
]
// export const viewpoints: GridItem[] = baseviewpoints.map(category => ({
//   ...category,
//   route: `/tabs/miradores/${category.route}`
// }));