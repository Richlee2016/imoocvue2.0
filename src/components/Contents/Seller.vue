<template>
	<div class="seller">
		<div class="title">
			<div class="left">
				<p>{{sellers.name}}</p>
				<div>
					<v-star
						:starNum="sellers.score"
						></v-star>
					<span>{{sellers.ratingCount}}</span>
					<label>月售{{sellers.sellCount}}单</label>
				</div>
			</div>
			<div class="right">
				<div class="heart"></div>
				<p>收藏</p>
			</div>
			<ul class="seller-nav">
				<li>
					<span>起送价</span>
					<p>{{sellers.minPrice}}元</p>
				</li>
				<li>
					<span>商家配送</span>
					<p>{{sellers.deliveryPrice}}元</p>
				</li>
				<li>
					<span>平均配送时间</span>
					<p>{{sellers.deliveryTime}}分钟</p>
				</li>
			</ul>
			<div class="active">
				<div class="text">
					<h4>公告与活动</h4>
					<p>{{sellers.bulletin}}</p>
				</div>
				<div>
					<!--<v-prefer></v-prefer>-->
				</div>
			</div>
			<div class="store">
				
			</div>
			<dl>
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
.seller{
	padding: 0 0.2rem;
	.title{
		width: 100%;
		overflow: hidden;
		.left{
			float: left;
			width: 50%;
			line-height: 0.4rem;
			p{
				width: 100%
			}
			div{
				width: 100%;
			}
		}
		.right{
			width: 50%;
			float: left;
			.heart{
				width: 0.4rem;
				height: 0.4rem;
				margin: auto;
				background: red;
			}
			p{
				width: 100%;
				text-align: center;
			}
		}
	}
}
.seller-nav{
	width: 100%;
	overflow: hidden;
	li{
		float: left;
		width: 33.2%;
		text-align: center;
		*{
			width: 100%;
		}
		span{
			float: left;
		}
		p{
			float: left;
			text-align: center;
		}
	}
}
</style>
