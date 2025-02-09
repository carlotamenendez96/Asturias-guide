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
]
// export const viewpoints: GridItem[] = baseviewpoints.map(category => ({
//   ...category,
//   route: `/tabs/miradores/${category.route}`
// }));