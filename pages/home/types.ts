export interface Product {
  id: string
  name: string
}

export interface SubCategory {
  name: string
  products: Array<Product>
}

export interface Categories {
  color: string
  name: string
  products?: Array<Product>
  subCategories?: Array<SubCategory>
}

export interface CategoriesResponse extends Array<Categories> { }