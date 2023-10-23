import type { ActionTree, Commit } from "vuex/types/index.js";
import type { ProductsState} from "~/store/Products/state";
import type { RootState } from "~/store/index";
import { add, queryByCollection } from "~/server/lib/firestore";
import store from '~/store'


const actions: ActionTree<ProductsState, RootState> = {
  FETCH_PRODUCTS:({ commit }: { commit: Commit }) => {
    const products = queryByCollection('products');
    commit('SET_PRODUCTS', products)
  },
  ADD_PRODUCT: ({ commit }: { commit: Commit }, item) => {
    add('products', item);
    commit('ADD_PRODUCT', item);
    store.dispatch("FETCH_PRODUCTS")
  },
};

export default actions;
