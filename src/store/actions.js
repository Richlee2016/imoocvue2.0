import * as types from './types'
import Vue from 'vue'

//卖家
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


//商品
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


//评价
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









