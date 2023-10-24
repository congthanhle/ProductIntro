import type { MutationTree } from "vuex/types/index.js";
import type { ProductsState, Product } from "~/store/Products/state";

const mutations: MutationTree<ProductsState> = {
  SET_PRODUCTS: (state: ProductsState, items: Product[]) => {
    state.products = items;
  },
};
export default mutations;
