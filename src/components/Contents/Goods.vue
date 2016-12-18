<template>
	<div class="goods">
		<div class="goods-nav" ref="menuscroll">
		  <ul>
		  	<li 
		  		v-for='(goods,index) in allGoods' 
		  		:class="{'active':activeNav === index}" 
		  		@click="navScroll(index,$event)">{{goods.name}}</li>
		  </ul>
		</div>
	  <div class="goods-wraper" ref="foodsscroll">
	  <ul>
	  	<li v-for="goods in allGoods">
	  		<h3>{{goods.name}}</h3>
	  		<section class="food-wraper" v-for="food in goods.foods">
	  			<div class="food-left">
	  				<img :src="food.icon"/>
	  			</div>
	  			<div class="food-right">
	  				<h3>{{food.name}}</h3>
	  				<p class="discrip">{{food.description}}</p>
	  				<p class="sell"><span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span></p>
	  				<span>
	  					<label>￥{{food.price}}</label>
	  					<b v-show='food.oldPrice'>￥{{food.oldPrice}}</b>
	  				</span>
	  			</div>
	  		</section>
	  	</li>
	  </ul>
	  </div>
	  <span class="get" @click="get">get</span>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
    	//good 高度
    	foodHei:[0],
    	//good 滚动Y值
    	scrollY:0
    }
  },  
  computed:{
  	//计算滚动得 index
  	activeNav() {
  		for(let i=0; i<this.foodHei.length; i++){
			if(this.scrollY >= this.foodHei[i] && this.scrollY < this.foodHei[i+1] ){
				return i;
			};
		};
		return 0;
  	},
  	//获取 store goods
  	...mapGetters({
  		allGoods:"allgoods"
  	})
  },
  methods:{
  	get() {
		console.log(this.activeNav);
  	},
  	navScroll(index,ev){
  		//处理 iScroll得一种兼容
  		if(!ev._constructed){
  			return;
  		};
  		let el = this.$refs.foodsscroll.querySelectorAll("li")[index];
  		//滚动 API
  		this.foodsScroll.scrollToElement(el,300);
  	},
  	//初始滚动设置
  	_initScroll() {
  		this.meunScroll = new Bscroll(this.$refs.menuscroll,{
  			click:true
  		});
  		this.foodsScroll = new Bscroll(this.$refs.foodsscroll,{
  			probeType:3
  		});
		//滚动监听
		this.foodsScroll.on('scroll',(pos) => {
			this.scrollY = Math.abs(Math.floor(pos.y));
		});
	},
	//计算需要滚动得高度
	_foodHeight() {
		let aFoods = this.$refs.foodsscroll.querySelectorAll("li");
		let totalHei = 0;
		for(let i=0; i<aFoods.length; i++){
			totalHei = totalHei + aFoods[i].offsetHeight;
			this.foodHei.push(totalHei);
		};
	}
  },
  //提交　　获取数据
  created(){
  	this.$store.dispatch("getGoods");
  },
  //在dom加载完成之后  进行相应得操作
　　　mounted(){
		//暂时没有找到 好的办法解决  异步得问题
		let timer = setTimeout(() => {
			this._initScroll();
			this._foodHeight();
			clearTimeout(timer);
		},100);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.get{
	position: fixed;
	left: 0px;
	top: 0px;
}
.goods{
	width: 100%;
	height: 100%;
	overflow: hidden;
	>div{
		height: 100%;
		/*overflow-y: auto;
		&::-webkit-scrollbar{
			width: 0px;
		}*/
	}
	>ul{
		min-height: 100%;
	}
	.goods-nav{
		width:1.6rem;
		float: left;
		background: #f3f5f7;
		li{
			width: 100%;
			height: 1.08rem;
			text-align: center;
			display: table;
		}
		.active{
			background: white;
		}
	}
}
.goods-wraper{
	width: 4.8rem;
	float: left;
	overflow: hidden;
	li{
		>h3{
			float: left;
			width: 100%;
			height: 0.52rem;
			line-height: 0.52rem;
			background: #f3f5f7;
			border-left:#d9dde1 4px solid ;
			padding-left: 0.2rem;
		}
	}
}
.food-wraper{
	width: 100%;
	overflow: hidden;
	padding-top: 0.3rem;
	.food-left{
		float: left;
		width: 1.14rem;
		height: 1.14rem;
		margin-left: 0.3rem;
	}
	.food-right{
		float: left;
		margin-left: 0.2rem;
		line-height: 0.3rem;
		h3{
			font-size: 0.28rem
		}
		p{
			color: #d9dde1;
			font-size: 0.2rem;
		}
		>span{
			color: #f01414;
		}
	}
}
</style>
