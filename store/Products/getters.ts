import type { GetterTree } from 'vuex/types/index.js'
import type { ProductsState } from '~/store/Products/state'
import type { RootState } from '~/store/index'

const getters: GetterTree<ProductsState, RootState> = {
  PRODUCTS: (state: ProductsState) => state.products
}

export default getters;
