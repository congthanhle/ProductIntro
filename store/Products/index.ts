import type { Module } from 'vuex/types/index.js'
import type { ProductsState } from '~/store/Products/state'
import state from '~/store/Products/state'
import getters from '~/store/Products/getters'
import mutations from '~/store/Products/mutations'
import actions from '~/store/Products/actions'
import type { RootState } from '~/store/index'

const itemsModule: Module<ProductsState, RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default itemsModule
