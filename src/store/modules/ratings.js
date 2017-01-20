import Vue from 'vue'
import types from 'types'
const state = {
	ratings:[],
	//状态码规定
	ERR_OK:0,
	//优惠
	rateshow:[]
}

const getters = {
	allratings (state){
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

const mutations = {
	[types.RATINGS_ALL] (state,{ratings}) {
		state.ratings = ratings.data;
	},
	//详情评价
	[types.RATINGS_SAW] (state, {saw}) {
		if(saw){
			state.rateshow = state.ratings;
		}else{
			state.rateshow = state.ratings.filter( (o) => o.text );
		}
	},
}

//评价
const actions = {
	[types.RATINGS_ALL] ({commit}) {
		Vue.http.get("/api/ratings")
		.then(
			(ret) => {
				commit(types.RATINGS_ALL,{ratings: ret.body});
				commit(types.RATINGS_SAW,{saw:true})
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