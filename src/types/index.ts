export interface GridItem {
	title: string;
	image: string;
	route: string;
	sections?: string[];
	location?: {
		lat: number;
		lng: number;
	};
}

export type CategoryType = "viewpoints" | "beaches" | "museos" | "restaurants";
