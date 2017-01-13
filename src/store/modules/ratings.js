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

const getters = {
	ratingrate(state){
		let show = state.rateshow,
			ratings = state.ratings;
		let filter = (data) => {
			let all = data;
			let good = data.filter((o) => {
				return o.score >=3
			});
			let bad = data.filter((o) => {
				return o.score <3
			});
			return {
				data:[all,good,bad],
				len:[all.length,good.length,bad.length]
			}
		}
		return {
			data:filter(show).data,
			len:filter(ratings).len,
		}
	}
}


export default {
  state,
  mutations,
  actions,
  getters
}