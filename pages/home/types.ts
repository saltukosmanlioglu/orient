export interface Product {
  id: string
  name: string
}

export interface SubCategory {
  category: string
  products: Array<Product>
}

export interface Menu {
  category: string
  color: string
  products?: Array<Product>
  subCategories?: Array<SubCategory>
}

export interface MenuResponse extends Array<Menu> { }