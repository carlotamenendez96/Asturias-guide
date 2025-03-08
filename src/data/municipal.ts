import { GridItem } from "@/types";
export const municipal: GridItem[] = [
	{
		title: "Municipal.gijon.title",
		image: "https://i.imgur.com/z7IGHRr.jpeg",
		images: [
			"https://i.imgur.com/z7IGHRr.jpeg",
			"https://i.imgur.com/ceFqpel.jpeg",
			"https://i.imgur.com/h60myFV.jpeg",
			"https://i.imgur.com/aHBqXeJ.jpeg",
			"https://i.imgur.com/OzVJb13.jpeg",
			"https://i.imgur.com/9K7yw5l.jpeg	",
			"https://i.imgur.com/TQYjGpx.jpeg",
		],
		route: "/municipal/gijon",
		sections: [
			"parking",
			"main_areas",
			"attractions",
			"beaches",
			"shopping",
			"nightlife",
			"events",
		],
		location: {
			lat: 43.5405,
			lng: -5.65487,
		},
		website: "https://www.gijon.es/es/turismo/descubre-gijon",
	},
	{
		title: "Municipal.oviedo.title",
		image: "https://i.imgur.com/WjoKu8S.jpeg",
		images: [
			"https://i.imgur.com/WjoKu8S.jpeg",
			"https://i.imgur.com/cXm14Hx.jpeg",
			"https://i.imgur.com/ZX3QrAm.jpeg",
			"https://i.imgur.com/kM24cs5.jpeg",
			"https://i.imgur.com/9KhhOE6.jpeg",
		],
		route: "/municipal/oviedo",
		sections: [
			"parking",
			"main_areas",
			"attractions",
			"shopping",
			"nightlife",
			"events",
		],
		location: {
			lat: 43.36029,
			lng: -5.84476,
		},
		website: "https://www.visitoviedo.info/",
	},
];
