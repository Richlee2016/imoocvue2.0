import Vue from 'vue'
import Vuex from 'vuex'
//modules
import goods from './modules/goods'
import ratings from './modules/ratings'
import seller from './modules/seller'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    seller,
    ratings,
    goods
  },
  strict: debug
})
