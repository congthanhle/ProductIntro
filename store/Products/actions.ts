import type { ActionTree, Commit } from "vuex/types/index.js";
import type { Product, ProductsState } from "~/store/Products/state";
import type { RootState } from "~/store/index";

import {
  queryByCollection,
  addItem,
  editItem,
  deleteItem,
} from "~/server/lib/firestore";
import store from "~/store";

const actions: ActionTree<ProductsState, RootState> = {
  FETCH_PRODUCTS: ({ commit }: { commit: Commit }) => {
    const products = queryByCollection('products')
    commit("SET_PRODUCTS", products);
  },
  ADD_PRODUCT: ({ commit }: { commit: Commit }, item) => {
    const addState = addItem("products", item);
    store.dispatch("FETCH_PRODUCTS");
    return addState;
  },
  EDIT_PRODUCT: ({ commit }: { commit: Commit }, item) => {
    const editState = editItem("products", item.id, item);
    store.dispatch("FETCH_PRODUCTS");
    return editState;
  },
  DELETE_PRODUCT: ({ commit }: { commit: Commit }, id) => {
    const deleteState = deleteItem("products", id);
    store.dispatch("FETCH_PRODUCTS");
    return deleteState;
  },
};

export default actions;
