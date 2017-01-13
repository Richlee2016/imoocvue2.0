[types.APP_GOODS_PUSH] (state,{food}) {
		console.log(food);
		//添加封装
		let add = () => {
			food.foodData.count = food.foodData.count + food.num;
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
		let countZero= state.choiceGoods.filter((o) => o.count !== 0);
		//更新数组  使得getter 计算属性
		state.choiceGoods = countZero;
	},