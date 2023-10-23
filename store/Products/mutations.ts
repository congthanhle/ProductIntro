import type { MutationTree } from "vuex/types/index.js";
import type { ProductsState, Product } from "~/store/Products/state";

const mutations: MutationTree<ProductsState> = {
  SET_PRODUCTS: (state: ProductsState, items: Product[]) => {
    state.products = items;
  },
  ADD_PRODUCT: (state: ProductsState, item: Product) => {
    // state.products.push(item);

  },
};
export default mutations;
