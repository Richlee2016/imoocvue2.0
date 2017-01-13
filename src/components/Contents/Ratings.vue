<template>
	<div class="rating">
	  <div class="title">
	  	<div class="left">
	  		<h3>{{seller.score}}</h3>
	  		<label>综合评分</label>
	  		<p>高于周边商家{{seller.rankRate}}%</p>
	  	</div>
	  	<ul class="right">
	  		<li>
	  			<span>服务态度</span>
	  			<v-star
	  				:starNum="seller.foodScore"
	  				></v-star>
	  			<label>{{seller.foodScore}}</label>
	  		</li>
	  		<li>
	  			<span>商品评分</span>
	  			<v-star
	  				:starNum="seller.serviceScore"
	  				></v-star>
	  			<label>{{seller.serviceScore}}</label>
	  		</li>
	  		<li>
	  			<span>送达时间</span>
	  			<font>{{seller.deliveryTime}}分钟</font>
	  		</li>
	  	</ul>
	  </div>
	  <div class="clear-line"></div>
	  <v-rate
	  	:ratelist="ratelist"
	  	@isshow="isshow"
	  	></v-rate>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../../store/types'
import Star from '../multi/star/Star'
import Rate from '../multi/rate/Rate'
export default {
	components:{
		"v-star":Star,
		"v-rate":Rate
	},
	computed:{
		...mapGetters({
			seller:"allseller",
			ratelist:"ratingrate",
		})
	},
	methods:{
		isshow(onOff){
			this.$store.dispatch("ratingShow",{show:onOff});
		}
	},
    created(){
  		this.$store.dispatch("getSeller");
  		this.$store.dispatch("getRatings");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.rating{
	.title{
		padding: 0 0.2rem;
		width:100%;
		background: white;
		height: 1.8rem;
		overflow:hidden;
		.left{
			float: left;
			width: 1.2rem;
			padding-right: 0.2rem;
			text-align: center;
			border-right: #ddd 1px solid;
			margin-top: 0.2rem;
			h3{
				line-height: 0.5rem;
				font-size: 0.24rem;
				color: #f90;
			}
			label{
				display: block;
				font-size: 12px;
			}
			p{
				color: #93999f;
				font-size: 12px;
			}
		}
		.right{
			float: left;
			width: 4.67rem;
			margin-left: 0.2rem;
			font-size: 0.2rem;
			li{
				line-height: 0.4rem;
				width: 100%;
				margin-top: 0.1rem;
				overflow: hidden;
				>span{
					float: left;
				}
				>div{float: left;}
				>label{float: left;}
				>font{
					float: left;
					padding-left: 0.1rem;
					color: #93999f;
				}
			}
		}
	}
}
</style>
