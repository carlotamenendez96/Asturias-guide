import { GridItem } from "@/types/index";
export const baseCategories: GridItem[] = [
	{
		title: "Home.categories.municipal",
		image: "/src/assets/img/municipal.webp",
		route: "/municipal",
	},
	{
		title: "Home.categories.beaches",
		image: "/src/assets/img/playas.webp",
		route: "/beaches",
	},
	{
		title: "Home.categories.restaurants",
		image: "/src/assets/img/restaurantes.webp",
		route: "/restaurants",
	},
	{
		title: "Home.categories.viewpoints",
		image: "/src/assets/img/miradores.webp",
		route: "/viewpoints",
	},
	{
		title: "Home.categories.markets",
		image: "/src/assets/img/mercadillos.webp",
		route: "/mercadillos",
	},
	{
		title: "Home.categories.arqueological",
		image: "/src/assets/img/arqueologicos.webp",
		route: "/cultural",
	},
	{
		title: "Home.categories.recreational",
		image: "/src/assets/img/naturaleza.webp",
		route: "/naturaleza",
	},
	{
		title: "Home.categories.museums",
		image: "/src/assets/img/museos.webp",
		route: "/museos",
	},
	{
		title: "Home.categories.accommodations",
		image: "/src/assets/img/alojamientos.webp",
		route: "/alojamientos",
	},
	{
		title: "Home.categories.routes",
		image: "https://i.imgur.com/BWAMoKn.jpeg",
		route: "/routes",
	},
	{
		title: "Home.categories.camping",
		image: "/src/assets/img/camping.webp",
		route: "/camping",
	},
	{
		title: "Home.categories.turism",
		image: "/src/assets/img/turismo.webp",
		route: "/turism",
	},
];

// export const categories: GridItem[] = baseCategories.map(category => ({
//   ...category,
//   route: `/tabs/all-options${category.route}`
// }));

export const categories: GridItem[] = baseCategories.map((category) => ({
	...category,
	image: new URL(category.image, import.meta.url).href,
}));
