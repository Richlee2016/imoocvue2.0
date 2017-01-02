import * as types from '../types'
import Vue from 'vue'
const state = {
	ratings:[],
	//状态码规定
	ERR_OK:0,
	//优惠
	ratedata:[],
	index:0
}

const mutations = {
	[types.APP_RATINGS] (state,{ratings}) {
		state.ratings = ratings.data;
		state.ratedata = ratings.data;
	},
	[types.APP_RATINGS_RATESELECT] (state,{index}) {
		state.ratedata = state.ratings;
		state.index = index;
		switch (index){
			case 0:
				state.ratedata = state.ratings;
				break;
			case 1:
				state.ratedata = state.ratings.filter((o) => {
					return o.score >=3
				});
				break;
			case 2:
				state.ratedata = state.ratings.filter((o) => {
					return o.score <3
				});
				break;	
		}
	},
	[types.APP_RATINGS_RATESHOW] (state,{show}) {
		if(show){
			state.ratedata = state.ratings;
		}else{
			state.ratedata = state.ratings.filter((o) => {
				return o.text;
			});
		};
		console.log(this);
//		Vue.store.commit(types.APP_RATINGS_RATESELECT,{index:state.index});
	}
}

export default {
  state,
  mutations
}