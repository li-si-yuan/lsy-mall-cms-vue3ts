import { Module } from 'vuex'

import {
  getCategoryTopData,
  getCategoryGoodsCount,
  getCategorySaleCount,
  getCategoryFavorCount,
  getAddressGoodsCount
} from '@/service/main/analysis/dashboard'

import { IDashboardState } from './types'
import { IRootState } from '@/store/types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryTopData: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      addressGoodsSale: [],
      categoryGoodsFavor: []
    }
  },
  mutations: {
    changeCategoryTopData(state, list) {
      state.categoryTopData = list
    },
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryTopDataResult = await getCategoryTopData()
      commit('changeCategoryTopData', categoryTopDataResult.data)

      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)

      const categoryGoodsSaleResult = await getCategorySaleCount()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)

      const addressGoodsSaleResult = await getAddressGoodsCount()
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)

      const categoryGoodsFavorResult = await getCategoryFavorCount()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)
    }
  }
}

export default dashboardModule
