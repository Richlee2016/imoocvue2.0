import Vue from 'vue'
import types from 'types'

const state = {
	seller:{},
	//状态码规定
	ERR_OK:0
}

const getters = {
	allseller (state){
		return state.seller;
	}
}

const mutations = {
	[types.SELLER_ALL] (state,{seller}) {
		if( seller.errno === state.ERR_OK){
			state.seller = seller.data;
		};
	}
}

const actions = {
	[types.SELLER_ALL] ({commit}) {
		Vue.http.get("/api/seller")
		.then(
			(ret) => {
				commit(types.SELLER_ALL,{seller: ret.body})
			},(err) => {
				console.log(err)
			}
		);
	}
}

export default {
  state,
  mutations,
  actions,
  getters
}