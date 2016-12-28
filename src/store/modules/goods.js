import * as types from '../types'
const state = {
	//商品信息
	goods:{},
	//状态码规定
	ERR_OK:0,
	//选定的商品
	choiceGoods:[],
	//商品详情
	detailGoods:{}
}

const mutations = {
	[types.APP_GOODS] (state,{goods}) {
		state.goods = goods.data;
	},
	[types.APP_GOODS_BUY] (state,{goods}) {
		console.log(goods);
	},
	//购物车添加
	[types.APP_GOODS_PUSH] (state,{food}) {
		//添加封装
		let add = () => {
			food.foodData.count = food.num;
			state.choiceGoods.push(food.foodData);
		}
		//初次添加
		if(state.choiceGoods.length == 0){
			add();
			return;
		};
		//如果不存在就添加
		//这里存在函数的引用 更改的 food.foodData 是对整个 state.goods 进行更改  (所以这里可以匹配成功) //这里采用引用的形式是否有不妥？？？
		if(state.choiceGoods.indexOf(food.foodData) == -1){
			add();
		//存在修改 数量	
		}else{
			state.choiceGoods.forEach((o) => {
				if(o.name === food.foodData.name){
					o.count = food.num;
				};
			});
		};
		//过滤掉 count 为0的商品
		let countZero= state.choiceGoods.filter((o) => {
			return o.count !== 0;
		});
		//更新数组  使得getter 计算属性
		state.choiceGoods = countZero;	
	},
	//商品详情
	[types.APP_GOODS_DETAIL] (state,{food}) {
		//处理时分秒
		food.ratings = food.ratings.map( (o,i) => {
							o.rateTime = o.rateTime + "rich";
							return o;
						});
		state.detailGoods = food;
	}
}

export default {
  state,
  mutations
}