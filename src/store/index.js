import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import goods from './modules/goods'
import ratings from './modules/ratings'
import seller from './modules/seller'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	//actions  getters  modules即是 mutations
  actions,
  getters,
  modules: {
    seller,
    ratings,
    goods
  },
  strict: debug
})
