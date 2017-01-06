import * as types from '../types'
import Vue from 'vue'
const state = {
	ratings:[],
	//状态码规定
	ERR_OK:0,
	//优惠
	ratedata:[],
	rateshow:[],
	index:0
}

const mutations = {
	[types.APP_RATINGS] (state,{ratings}) {
		state.ratings = ratings.data;
		state.ratedata = ratings.data;
		state.rateshow = ratings.data;
	},
	[types.APP_RATINGS_RATESELECT] (state,{index,show}) {
		let rateshow = (index) => {
			switch (index){
				case 0:
					state.ratedata = state.rateshow;
					break;
				case 1:
					state.ratedata = state.rateshow.filter((o) => o.score>= 3);
					break;
				case 2:
					state.ratedata = state.rateshow.filter((o) => o.score<3);
					break;	
			}
		}
		if(typeof index === 'number'){state.index = index};
		if(show === undefined){
			rateshow(state.index);
			return;
		};
		if(show){
			state.rateshow = state.ratings;
			rateshow(state.index);
		}else{
			state.rateshow = state.ratings.filter((o) => o.text);
			rateshow(state.index);
		};
	},
//	[types.APP_RATINGS_RATESHOW] (state,{show}) {
//		if(show){
//			state.ratedata = state.ratings;
//		}else{
//			state.ratedata = state.ratings.filter((o) => o.text);
//		};
//		console.log();
//		Vue.store.commit(types.APP_RATINGS_RATESELECT,{index:state.index});
//	}
}

export default {
  state,
  mutations
}