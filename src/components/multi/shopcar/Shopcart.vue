<template>
  <div class="shopcart">
  	<div class="car-box">
  		<div class="car-num" v-show="tatleprice.len>0">{{tatleprice.len}}</div>
  		<span :class="{'height-light':tatleprice.len>0}">
  			<label>car</label>
  		</span>
  	</div>
  	<div class="car-pri">
  		<p>${{tatleprice.all}}</p>
  		<span>另需配送费￥{{sendPrice}}元</span>
  	</div>
  	<span class="car-sub" >
  		<span v-show='tatleprice.all==0'>${{minPrice}}起送</span>
  		<span v-show="tatleprice.all>0 && minPrice-tatleprice.all>0">还差${{minPrice-tatleprice.all}}起送</span>
  		<span v-show="minPrice-tatleprice.all<=0" @click="subBuygood">结算</span>
  	</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data(){
		return{
			minPrice:40,
			sendPrice:6
		}
	},
	components:{
		test:"allgoods"
	},
	methods:{
		subBuygood(){
			this.$store.dispatch("buyGoods");
		}
	},
	computed:{
		...mapGetters({
			tatleprice:'tatleprice'
		})
	}
}
</script>

<style lang="scss">
.shopcart{
	width: 100%;
	height: 1.16rem;
	position: fixed;
	left: 0px;
	bottom:0rem;
	background: #141d27;
}
.car-box{
	width: 1rem;
	height: 1rem;
	background:#141d27 ;
	border-radius: 1rem;
	position:absolute;
	left: 0.36rem;
	top: -0.24rem;
	.height-light{
		background: #00a0dc;
		color: white;
	}
	span{
		display: block;
		width: 0.88rem;
		height: 0.88rem;
		border-radius: 0.44rem;
		margin-left: 0.06rem;
		margin-top: 0.07rem;
		background: #2b343c;
		color: #80858a;
		font-size: 0.4rem;
		text-align: center;
		line-height: 0.68rem;
	}
}
.car-pri{
	float: left;
	width: 3.2rem;
	height: 100%;
	margin-left: 1.6rem;
	p,span{
		float: left;
		color: rgba(255,255,255,0.4);
		text-align: center;
	}
	p{
		line-height:1.16rem ;
		font-size: 0.32rem;
		width: 1rem;
	}
	span{
		margin: 0.2rem 0;
		height: 0.76rem;
		line-height: 0.76rem;
		padding-left: 0.2rem;
		font-size: 0.2rem;
		width: 1.98rem;
		text-align: left;
		border-left:rgba(255,255,255,0.6) 1px solid;
	}
}
.car-sub{
	float: right;
	width: 1.6rem;
	height: 100%;
	background: #2b333b;
	border: none;
	font-size: 0.24rem;
	color: rgba(255,255,255,0.4);
	text-align: center;
	line-height: 1.16rem;
}
.car-num{
	z-index: 99;
	width: 0.5rem;
	height: 0.24rem;
	color: white;
	border-radius:0.4rem;
	background:#f01414;
	font-size: 0.16rem;
	line-height: 0.24rem;
	text-align: center;
	position: absolute;
	right: 0px;
	top: 0px;
}
</style>
