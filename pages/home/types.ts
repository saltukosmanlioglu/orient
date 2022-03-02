export interface Product {
  id: string
  title: string
}

export interface SubCategory {
  title: string
  products: Array<Product>
}

export interface Categories {
  color: string
  title: string
  products?: Array<Product>
  subCategories?: Array<SubCategory>
}

export interface CategoriesResponse extends Array<Categories> { }