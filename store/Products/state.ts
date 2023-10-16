export interface Product {
  id: string
  title: string
  images: [string]
  price: number
  description: string
}

export interface ProductsState {
  products: Product[],
}

const state: ProductsState = {
  products: [],
}

export default state
