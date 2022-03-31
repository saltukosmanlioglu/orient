export interface Product {
  id: number;
  productId: number;
  title: string;
  order: number;
}

export interface SubCategory {
  title: string;
  color: string;
  order: number;
  products: Array<Product>;
}

export interface Categories {
  color: string;
  order: number;
  products?: Array<Product>;
  subCategories?: Array<SubCategory>;
  title: string;
}

export interface Languages {
  id: number;
  language: string;
}

export interface CategoriesResponse extends Array<Categories> {}

export interface LanguagesResponse extends Array<Languages> {}
