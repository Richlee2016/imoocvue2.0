<template>
	<transition name="slide-fade">
	<div class="detail" v-if='detailShow'>
		<button class="backbtn" @click="quit">back</button>
		<section class="box01">
			<img :src="detailData.image"/>
			<div class="name">{{detailData.name}}</div>
			<div class="sellcount">月售{{detailData.sellCount}}份,好评率{{detailData.rating}}</div>
			<div class="price">${{detailData.price}} <s v-if='detailData.oldPrice'>{{detailData.oldPrice}}</s></div>
			<div class="addcar">
				<span v-if="detailData.count>0? false : true" class="addbtn" @click="addCarBtn">加入购物车</span>
				<v-carcontrol
					v-else
					:propsNum="detailData"
  					@renduce='reduceGood(detailData)'
  					@add='addGood(detailData)'
					></v-carcontrol>
			</div>
		</section>
		<section class="box02">
			<h3>商品介绍</h3>
			<p>{{detailData.description}}</p>
		</section>
		<v-rate
			:isOut="{star:false,text:false,common:false}"
			:ratelist="ratelist"
		  	@isshow="isshow"
			></v-rate>
	</div>
	</transition>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from "../../store/types"
import Rate from '../multi/rate/Rate'
import Carcontrol from '../multi/shopcar/Carcontrol'
export default {
	components:{
		"v-rate":Rate,
		"v-carcontrol":Carcontrol
	},
	data (){
	    return {
	    	addshow:true
	    }
	},
	computed:{
		...mapGetters({
	  		detailData:"detailgoods",
	  		ratelist:"goodsrate"
	  	})
	},
	props:{
	    detailShow:{
	    	type:Boolean,
	      	default:false
	    },   
	},    
	methods:{
	  	quit (){
	  		this.$emit("close");
	  	},
		isshow (onOff){
			this.$store.dispatch("goodsRateShow",{show:onOff});
		},
		addGood(food) {
			this.$store.commit(types.APP_GOODS_ADD,{food:food});
			console.log(food.count);
		},
		reduceGood(food) {
			this.$store.commit(types.APP_GOODS_REDUCE,{food:food});
			console.log(food.count);
		}
	},
    created (){
  		this.$store.dispatch("getRatings");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.detail{
	z-index: 100;
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	background:white;
	.box01{
		overflow: hidden;
		padding: 0 0.2rem;
		.name{
			color: #07111b;
			font-weight: 600;
		}
		.sellcount{
			color: #93999f;
		}
		.price{
			color: #f01414;
			line-height: 0.6rem;
		}
	}
	.addcar{
		position: absolute;
		right:0.2rem;
		bottom: 0rem;
		width: 1.6rem;
		height: 0.6rem;
		.addbtn{
			margin-top:0.12rem ;
			display: block;
			height: 0.36rem;
			border-radius: 0.36rem;
			background: #00a0dc;
			line-height:0.36rem;
			color: white;
			text-align: center;
			font-size: 0.2rem;
		}
	}
}
.backbtn{
	z-index: 100;
	width: 1.2rem;
	height: 0.4rem;
	position: absolute;
	left: 0px;
	top: 0px;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(6.4rem);
  opacity: 0;
}
</style>
