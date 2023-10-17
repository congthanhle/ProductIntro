export interface Product {
  id: string,
  name: string,
  image: string,
  price: number,
  description: string
}

export interface ProductsState {
  products: Product[],
}

const state: ProductsState = {
  products: [],
}

export default state
