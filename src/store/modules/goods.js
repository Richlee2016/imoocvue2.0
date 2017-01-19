import Vue from 'vue'
import types from 'types'

const state = {
	//全部商品
	goods:[],
	//商品详情
	detail:{
		food:{},
		show:false
	},
	//详情评价
	ratings:[],
	//选中商品
	totleGoods:[]
}

const getters = {
	//所有商品
	allgoods (state){
		return state.goods;
	},
	//商品详情
	detail (state){
		return state.detail;
	},
	//详情评价
	detailRatings (state){
		let show = state.ratings,
			ratings = state.detail.food.ratings ? state.detail.food.ratings : [];
		let filterType = (data) => {
			let all = data;
			let good = data.filter((o) => o.rateType == 0);
			let bad = data.filter((o) => o.rateType == 1);
			return {
				data:[all,good,bad],
				len:[all.length,good.length,bad.length]
			}
		}
		return {
			data:filterType(show).data,
			len:filterType(ratings).len,
		}
	},
	//总金额
	tatleprice (state){
		let all = 0,
			len = 0;
		let goods = state.totleGoods;
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
	}
}

const mutations = {
	//全部商品
	[types.GOODS_ALL] (state,{goods}) {
		state.goods = goods.data.map((good,i) => {
						good.foods.forEach((food,j) => {
							food.count = 0;
							food.id = i.toString() + j;
						})
						return good;
					  });
		
	},
	//商品详情
	[types.GOODS_DETAIL_FOOD] (state,{food}) {
		state.detail.show = true;
		state.detail.food = food;
	},
	[types.GOODS_DETAIL_CLOSE] (state, {food}) {
		state.detail.show = false;
	},
	//详情评价
	[types.GOODS_RATINGS_SAW] (state, {saw}) {
		let ratings = state.detail.food.ratings ? state.detail.food.ratings : [];
		if(saw){
			state.ratings = ratings;
		}else{
			state.ratings = ratings.filter( (o) => o.text );
		}
	},
	//商品加减
	[types.GOODS_NUM] (state, {id,evname}){
		state.goods.forEach((good) => {
			good.foods.forEach((food) => {
				if(food.id === id ){
					if(evname == 'add'){
						if(state.totleGoods.indexOf(food) === -1){
							state.totleGoods.push(food);
						};
						food.count++;
					}else if(evname == 'reduce'){
						food.count--;
						console.log(0);
					}
				};
			})
		});
	}
}

const actions = {
	////全部商品
	[types.GOODS_ALL] ({commit}){
		Vue.http.get("/api/goods")
		.then(
			(ret) => {
				commit(types.GOODS_ALL,{goods: ret.body})
			},(err) => {
				console.log(err)
			}
		);
	},
	//商品详情跳转
	[types.GOODS_DETAIL_FOOD] ({commit},{food,saw}){
		commit(types.GOODS_DETAIL_FOOD,{food:food});
		commit(types.GOODS_RATINGS_SAW,{saw:saw});
	}
}

export default {
  state,
  mutations,
  actions,
  getters
}