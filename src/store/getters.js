export const allseller = state => state.seller.seller;
export const allgoods = state => state.goods.goods;
export const allratings = state => state.ratings.ratings;

//购物车计算总金额
export const tatleprice = state => {
	let all = 0;
	let goods = state.goods.choiceGoods;
	for(let i=0; i<goods.length; i++){
		all =all + goods[i].count*goods[i].price;
	};
	return all;
}

//详情
export const detailgoods = state => state.goods.detailGoods;
export const ratings = state => state.goods.detailGoods.ratings;



