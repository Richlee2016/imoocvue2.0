import * as types from './types'
import Vue from 'vue'

//购物车
export const getSeller = ({commit}) => {
	Vue.http.get("/api/seller")
	.then(
		(ret) => {
			commit(types.APP_SELLER,{seller: ret.body})
		},(err) => {
			console.log(err)
		}
	);
}


//购物车
export const getGoods = ({commit}) => {
	Vue.http.get("/api/goods")
	.then(
		(ret) => {
			commit(types.APP_GOODS,{goods: ret.body})
		},(err) => {
			console.log(err)
		}
	);
}


//购物车
export const getRatings = ({commit}) => {
	Vue.http.get("/api/ratings")
	.then(
		(ret) => {
			commit(types.APP_RATINGS,{ratings: ret.body})
		},(err) => {
			console.log(err)
		}
	);
}









