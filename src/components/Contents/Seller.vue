<template>
	<div class="seller">
		<div class="title">
			<section class="title-line">
				<div class="left">
					<p>{{sellers.name}}</p>
					<div>
						<div class="star-seller">
						<v-star
							:starNum="sellers.score"
							></v-star>
						</div>	
						<span>({{sellers.ratingCount}})</span>
						<label>月售{{sellers.sellCount}}单</label>
					</div>
				</div>
				<div class="right">
					<div class="heart"></div>
					<p>收藏</p>
				</div>
			</section>
			<ul class="seller-nav">
				<li>
					<span>起送价</span>
					<p><label>{{sellers.minPrice}}</label>元</p>
				</li>
				<li>
					<span>商家配送</span>
					<p><label>{{sellers.deliveryPrice}}</label>元</p>
				</li>
				<li>
					<span>平均配送时间</span>
					<p><label>{{sellers.deliveryTime}}</label>分钟</p>
				</li>
			</ul>
			<div class="clear-line"></div>
			<div class="activet">
				<div class="text">
					<h3>公告与活动</h3>
					<p>{{sellers.bulletin}}</p>
				</div>
				<div>
					<!--<v-prefer></v-prefer>-->
				</div>
			</div>
			<div class="store">
				
			</div>
			<div class="clear-line"></div>
			<dl class="seller-meg">
				<dt>商家信息</dt>
				<dd v-for="item in sellers.infos">{{item}}</dd>
			</dl>
			<div class="right"></div>
		</div>
		<div @click="test">test</div>
	</div>
</template>

<script>
import Star from 'components/multi/star/Star'
import Prefer from 'components/multi/prefer/Prefer'
import {mapGetters} from "vuex"
import types from 'types'
export default {
	components:{
		"v-star":Star,
//		"v-prefer":Prefer
	},
	computed:{
		...mapGetters({
			sellers:"allseller"
		})
	},    
	methods:{
	  test(){
	  	console.log(this.sellers);
	  }
	},
	created(){
		this.$store.dispatch(types.SELLER_ALL);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './scss/seller.scss'
</style>
