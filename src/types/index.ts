export interface GridItem {
  title: string;
  image: string; 
  route: string;
  sections?: string[];
}


export type CategoryType = 'viewpoints' | 'beaches' | 'museos';