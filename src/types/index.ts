export interface GridItem {
	title: string;
	image: string;
	images?: string[];
	route: string;
	sections?: string[];
	location?: {
		lat: number;
		lng: number;
	};
	website?: string;
}

export type CategoryType = "viewpoints" | "beaches" | "museos" | "restaurants";
