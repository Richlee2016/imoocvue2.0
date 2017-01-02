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


//rating评价
export const ratingrate = state => {
	let filterRate = (arr) => {
		let all = arr;
		let good = arr.filter((o) => {
			return o.score >=3
		});
		let bad = arr.filter((o) => {
			return o.score <3
		});
		
		return {
			data:[all,good,bad],
			len:[all.length,good.length,bad.length]
		}
	};
	let data =state.ratings.ratedata;
	let len = filterRate(state.ratings.ratings).len;
	return {
		data:data,
		len:len
	}
}

//goods评价
export const goodrate = state => {
	let filterRate = (arr) => {
		let all = arr;
		let good = arr.filter((o) => {
			return o.rateType == 0;
		});
		let bad = arr.filter((o) => {
			return o.rateType == 1;
		});
		
		return {
			data:[all,good,bad],
			len:[all.length,good.length,bad.length]
		}
	};
	let data =state.goods.ratedata;
	let len = filterRate(state.goods.ratings).len;
	return {
		data:data,
		len:len
	}
}

