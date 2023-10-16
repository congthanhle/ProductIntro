import type { ActionTree, Commit } from "vuex/types/index.js";
import type { ProductsState} from "~/store/Products/state";
import type { RootState } from "~/store/index";

const actions: ActionTree<ProductsState, RootState> = {
  fetchProducts:({ commit }: { commit: Commit }, products: ProductsState) => {
    commit('SET_PRODUCTS', products)
  }
};

export default actions;
