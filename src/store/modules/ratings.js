import * as types from '../types'
import Vue from 'vue'
const state = {
	ratings:[],
	//状态码规定
	ERR_OK:0,
	//优惠
	rateshow:[]
}

const mutations = {
	[types.APP_RATINGS] (state,{ratings}) {
		state.ratings = ratings.data;
		state.ratedata = ratings.data;
		state.rateshow = ratings.data;
	},
	[types.APP_RATINGS_SHOW] (state,{show}) {
		if(show){
			state.rateshow = state.ratings;
		}else{
			state.rateshow = state.ratings.filter((o) => o.text);
		};
	}
}

//评价
const actions = {
	getRatings ({commit}) {
		Vue.http.get("/api/ratings")
		.then(
			(ret) => {
				commit(types.APP_RATINGS,{ratings: ret.body})
			},(err) => {
				console.log(err)
			}
		);
	},
	ratingShow ({commit,state},{index,show}) {
		if(show !== undefined){
			commit(types.APP_RATINGS_SHOW,{show:show});
		};
	}
}




export default {
  state,
  mutations,
  actions
}