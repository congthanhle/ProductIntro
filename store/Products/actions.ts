import type { ActionTree, Commit } from "vuex/types/index.js";
import type { ProductsState } from "~/store/Products/state";
import type { RootState } from "~/store/index";

import {
  queryByCollection,
  addItem,
  editItem,
  deleteItem,
} from "~/server/lib/firestore";


const actions: ActionTree<ProductsState, RootState> = {
  FETCH_PRODUCTS: ({ commit }: { commit: Commit }) => {
    const products = queryByCollection('products')
    commit("SET_PRODUCTS", products);
  },
  ADD_PRODUCT: ({ commit }: { commit: Commit }, item) => {
    const addState = addItem("products", item);
    return addState;
  },
  EDIT_PRODUCT: ({ commit }: { commit: Commit }, item) => {
    const editState = editItem("products", item.id, item);
    return editState;
  },
  DELETE_PRODUCT: ({ commit }: { commit: Commit }, id) => {
    const deleteState = deleteItem("products", id);
    return deleteState;
  },
};

export default actions;
