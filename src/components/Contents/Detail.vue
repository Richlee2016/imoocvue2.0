<template>
	<transition name="slide-fade">
	<div class="detail" v-show='detail.show'>
		<button class="backbtn" @click="close">back</button>
		<section class="box01">
			<img :src="detail.food.image"/>
			<div class="box01-title">
				<div class="name">{{detail.food.name}}</div>
				<div class="sellcount">月售{{detail.food.sellCount}}份,好评率{{detail.food.rating}}</div>
				<div class="price">${{detail.food.price}} <s v-if='detail.food.oldPrice'>{{detail.food.oldPrice}}</s></div>
				<div class="addcar">
				<transition name="add-car" mode="out-in">	
					<span v-if="detail.food.count>0? false : true" class="addbtn" @click="add({id:detail.food.id,evname:'add'})">加入购物车</span>
					<div v-else class="add-control">
						<v-carcontrol
							:propsNum='detail.food.count'
		  					@add="add({id:detail.food.id,evname:'add'})"
		  					@reduce="add({id:detail.food.id,evname:'reduce'})"
							></v-carcontrol>
					</div>
				</transition>		
				</div>
			</div>
		</section>
		<div class="clear-line"></div>
		<section class="box02">
			<h3>商品信息</h3>
			<p>{{detail.food.description}}</p>
		</section>
		<div class="clear-line"></div>
		<section class="box03">
			<h3>商品评价</h3>
		<v-rate
			:isOut="{star:false,text:false,common:false}"
			:ratelist="ratelist"
		  	@isshow="issaw"
			></v-rate>
		</section>	
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
@import './scss/detail.scss';
</style>
