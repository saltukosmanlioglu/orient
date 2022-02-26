export interface Product {
  id: string
  name: string
}

export interface SubCategory {
  name: string
  products: Array<Product>
}

export interface Menu {
  name: string
  color: string
  products?: Array<Product>
  subCategories?: Array<SubCategory>
}

export interface MenuResponse extends Array<Menu> { }