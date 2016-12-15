import * as types from '../types'
const state = {
	goods:{},
	//状态码规定
	ERR_OK:0
}

const mutations = {
	[types.APP_GOODS] (state,{goods}) {
		state.goods = goods.data;
	}
}

export default {
  state,
  mutations
}