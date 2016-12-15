import * as types from '../types'
const state = {
	seller:{},
	//状态码规定
	ERR_OK:0
}

const mutations = {
	[types.APP_SELLER] (state,{seller}) {
		if( seller.errno === state.ERR_OK){
			state.seller = seller.data;
		};
	}
}

export default {
  state,
  mutations
}