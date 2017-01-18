import * as types from '../types'
import Vue from 'vue'
const state = {
	//商品信息
	goods:[],
	//状态码规定
	ERR_OK:0,
	//选定的商品
	choiceGoods:[],
	//商品详情
	detailGoods:{},
	//显示得评价
	ratings:[],
	ratedata:[],
	rateshow:[]
}

const mutations = {
	[types.APP_GOODS] (state,{goods}) {
		state.goods = goods.data;
		state.goods.forEach((good) => {
			good.foods.forEach((food) => food.count = 0)
		});
	},
	//购物车加
	[types.APP_GOODS_ADD] (state,{food}){
		food.count++;
		if(state.choiceGoods.indexOf(food) == -1){
			state.choiceGoods.push(food);
		};
//		console.log(state.choiceGoods);
	},
	////购物车减
	[types.APP_GOODS_REDUCE] (state,{food}){
		food.count--;
		state.choiceGoods.forEach((o,i) =>{
			if(o.count === 0){
				state.choiceGoods.splice(i,1)
			};
		});
//		console.log(state.choiceGoods);
	},
	[types.APP_GOODS_RATESHOW] (state,{show}) {
		if(show){
			state.rateshow = state.ratings;
		}else{
			state.rateshow = state.ratings.filter((o) => o.text);
		};
	},
	//商品详情
	[types.APP_GOODS_DETAIL] (state,{food}) {
		//处理时分秒
		food.ratings = food.ratings.map( (o,i) => {
							o.rateTime = o.rateTime + "rich";
							return o;
						});
		state.detailGoods = food;
		//评价信息
		state.ratings = food.ratings;
		state.rateshow = state.ratings;
	},
}

const actions = {
	//获取商品
	getGoods ({commit}){
		Vue.http.get("/api/goods")
		.then(
			(ret) => {
				commit(types.APP_GOODS,{goods: ret.body})
			},(err) => {
				console.log(err)
			}
		);
	},
	//购买商品提交
	buyGoods ({commit}){
		Vue.http.post("/api/goods/buy")
		.then(
			(ret) => {
				console.log(ret.body);
			},(err) => {
				console.log(err);
			}
		);
	},
	//是否有详情评价
	goodsRateShow ({commit,state},{index,show}) {
		console.log(0);
		if(show !== undefined){
//			commit(types.APP_GOODS_RATESHOW,{show:show});
		};
	}
}

const getters = {
	//所有的商品
	allgoods (state){
		return state.goods;
	},
	//结算
	tatleprice (state){
		let all = 0,
			len = 0;
		let goods = state.choiceGoods;
		for(let i=0; i<goods.length; i++){
			all =all + goods[i].count*goods[i].price;
		};
		goods.forEach((o) => {
			len = len + o.count;
		});
		return {
			all:all,
			len:len
		}
	},
	//商品的详情页评价
	goodsrate (state){
		let show = state.rateshow,
			ratings = state.ratings;
		let filter = (data) => {
			let all = data;
			let good = data.filter((o) => o.rateType == 0);
			let bad = data.filter((o) => o.rateType == 1);
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