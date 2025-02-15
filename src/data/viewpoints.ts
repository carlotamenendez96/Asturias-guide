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
    ],
    location: {
      lat: 43.5811386,
      lng: -6.2489891
    }
  },
  {
    title: 'Viewpoints.mirador-de-san-roque.title',
    image: 'https://i.imgur.com/KoyBxI9.jpeg',
    route: '/viewpoints/mirador-de-san-roque',
    sections: [
      'parking',
      'access', 
      'services'
   ],
   location: {
    lat: 43.51638510368628,
    lng: -5.268832147121429
   }
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
  },
  {
    title: 'Viewpoints.mirador-de-pedro-udaondo.title',
    image: 'https://i.imgur.com/RAZRVVS.jpeg',
    route: '/viewpoints/mirador-de-pedro-udaondo',
    sections: [
      'parking',
      'access', 
      'services'
    ],
    location: {
      lat:  43.4476547,
      lng: -5.1848655
    }
  },
  {
    title: 'Viewpoints.mirador-cristo-naranco.title',
    image: 'https://i.imgur.com/6pFkpIV.jpeg',
    route: '/viewpoints/mirador-cristo-naranco',
    sections: [
      'parking',
      'access', 
      'services'
    ],
    location: {
      lat: 43.38472644414714,
      lng: -5.86374822209046
    }
  },
  {
    title: 'Viewpoints.mirador-de-la-boriza.title',
    image: 'https://i.imgur.com/Wm12bF0.jpeg',
    route: '/viewpoints/mirador-de-la-boriza',
    sections: [
      'parking',
      'access', 
      'services'
    ],
    location: {
      lat:  43.4099808,
      lng: -4.7117085
    }
  },
  {
    title: 'Viewpoints.mirador-de-la-regalina.title',
    image: 'https://i.imgur.com/XwihQ1T.jpeg',
    route: '/viewpoints/mirador-de-la-regalina',
    sections: [
      'parking',
      'access', 
      'services'
    ],
    location: {
      lat: 43.555064380382035,
      lng: -6.372285559019204
    }
  },
  {
    title: 'Viewpoints.mirador-de-penouta-interior.title',
    image: 'https://i.imgur.com/h2a5KH8.jpeg',
    route: '/viewpoints/mirador-de-penouta-interior',
    sections: [
      'parking',
      'access', 
      'services'
    ],
    location: {
      lat: 43.43418707105134,
      lng: -6.837765130188793
    }
  },
  {
    title: 'Viewpoints.mirador-de-torimbia.title',
    image: 'https://i.imgur.com/lzRxPP9.jpeg',
    route: '/viewpoints/mirador-de-torimbia',
    sections: [
      'parking',
      'access', 
      'services'
    ], 
    location: {
      lat: 43.4424125,
      lng:  -4.8550563888889
    }
  },
  {
    title: 'Viewpoints.mirador-cabo-peñas.title',
    image: 'https://imgur.com/QQsF0tJ.jpeg',
    route: '/viewpoints/mirador-cabo-peñas',
    sections: [
      'parking',
      'access',
      'services'
    ],
    location: {
      lat: 43.65569444,
      lng:  -5.84890278
    }
  }
]
// export const viewpoints: GridItem[] = baseviewpoints.map(category => ({
//   ...category,
//   route: `/tabs/miradores/${category.route}`
// }));