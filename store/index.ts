import type { ProductsState } from '~/store/Products/state'
import { createStore } from 'vuex'
import productsItem from '~/store/Products'

export interface RootState {
  productsState: ProductsState
}

const store = createStore<RootState>({
  modules: {
    productsItem
  }
})

export default store

