<template>
	<transition name="slide-fade">
	<div class="detail" v-show='detail.show'>
		<button class="backbtn" @click="close">back</button>
		<section class="box01">
			<img :src="detail.food.image"/>
			<div class="name">{{detail.food.name}}</div>
			<div class="sellcount">月售{{detail.food.sellCount}}份,好评率{{detail.food.rating}}</div>
			<div class="price">${{detail.food.price}} <s v-if='detail.food.oldPrice'>{{detail.food.oldPrice}}</s></div>
			<div class="addcar">
				<span v-if="detail.food.count>0? false : true" class="addbtn">加入购物车</span>
				<v-carcontrol
					v-else
					:propsNum='detail.food.count'
  					@add="add({id:detail.food.id,evname:'add'})"
  					@reduce="add({id:detail.food.id,evname:'reduce'})"
					></v-carcontrol>
			</div>
		</section>
		<section class="box02">
			<h3>商品介绍</h3>
			<p>{{detail.food.description}}</p>
		</section>
		<v-rate
			:isOut="{star:false,text:false,common:false}"
			:ratelist="ratelist"
		  	@isshow="issaw"
			></v-rate>
	</div>
	</transition>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import types from 'types'
import Rate from 'components/multi/rate/Rate'
import Carcontrol from 'components/multi/shopcar/Carcontrol'
export default {
	components:{
		"v-rate":Rate,
		"v-carcontrol":Carcontrol
	},
	computed:{
		...mapGetters({
	  		detail:"detail",
	  		ratelist:"detailRatings"
	  	})
	},  
	methods:{
		...mapMutations({
			close:types.GOODS_DETAIL_CLOSE,
			add:types.GOODS_NUM
		}),
		issaw (saw){
			this.$store.commit(types.GOODS_RATINGS_SAW,{saw:saw});
		}
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
