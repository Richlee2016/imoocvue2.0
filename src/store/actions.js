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
};


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
};

//提交购买的商品
export const buyGoods = ({commit}) => {
	Vue.http.post("/api/goods/buy")
	.then(
		(ret) => {
			commit(types.APP_GOODS_BUY,{goods: ret.body});
		},(err) => {
			console.log(err);
		}
	);
}


////评价
//export const getRatings = ({commit}) => {
//	Vue.http.get("/api/ratings")
//	.then(
//		(ret) => {
//			commit(types.APP_RATINGS,{ratings: ret.body})
//		},(err) => {
//			console.log(err)
//		}
//	);
//};

////评价详情
//export const ratingShow = ({commit,state},{show}) => {
//	let index = state.ratings.index;
//	if(show === undefined){
//		rateshow(index);
//		return;
//	};
//	if(show){
//		state.rateshow = state.ratings;
//		rateshow(index);
//	}else{
//		state.rateshow = state.ratings.filter((o) => o.text);
//		rateshow(state.index);
//	};
//}







