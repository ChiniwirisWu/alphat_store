export interface CatalogItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  isFeatured: boolean;
  image: string | null;
}
