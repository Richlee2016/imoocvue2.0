import * as types from '../types'
const state = {
	ratings:{},
	//状态码规定
	ERR_OK:0
}

const mutations = {
	[types.APP_RATINGS] (state,{ratings}) {
		state.ratings = ratings.data;
	}
}

export default {
  state,
  mutations
}