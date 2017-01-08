<template>
  <div class="header">
  	<div class="header-bd">
  		<img :src="seller.avatar"/>
  	</div>
  	<div class="header-top">
  		<div>
  			<img :src="seller.avatar"/>
  		</div>
  		<ul class="header-title">
  			<li class="li01">
  				<span>品牌</span>
  				<h3>{{seller.name}}</h3>
  			</li>
  			<li class="li02">
  				<p>蜂鸟转送/{{seller.deliveryTime}}分钟送达</p>
  			</li>
  			<li class="li03">
  				<!-- 优惠组件 -->
  				<prefer :preData="support"></prefer>
  				<div class="detail-in" @click="detailOut = true">{{seller.supports?seller.supports.length : 0}}个 ></div>
  			</li>
  		</ul>
  	</div>
  	<div class="header-news" @click="detailOut = true">
  		<span>公告</span>
  		<p>{{seller.bulletin}}</p>
  		<label>></label>
  	</div>
  	<transition name="detail-out">
  	<div v-if="detailOut" class="detail-box">
  		<section>
	  		<div class="detail-name">详情</div>
	  		<!-- 星星组件 -->
	  		<div class="detail-star">
		  		<star
		  			:starNum="seller.score"
		  			></star>
	  		</div>
	  		<!-- 优惠组件 -->
	  		<div class="detail-pre">
	  			<div class="line-name">优惠信息</div>
		  		<prefer
		  			 :preData="seller.supports"
		  			 ></prefer>
	  		</div>
	  		<div class="detail-pre">
	  			<div class="line-name">商家公告</div>
		  		<p class="bulletin">{{seller.bulletin}}</p>
	  		</div>
	  		<div class="close" @click="detailOut = false">CLOSE</div>
  		</section>
  	</div>
  	</transition>
  	<!--<div class="get" @click="get">get</div>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Star from '../multi/star/Star'
import Prefer from '../multi/prefer/Prefer'
export default {
  data () {
    return {
    	detailOut:false
    }
  },
  components:{
  	Star,Prefer
  },
  computed:{
  	support(){
  		if(this.seller.supports !==undefined){
  			return [this.seller.supports[0]];
  		};
  	},
  	...mapGetters({
  		seller:'allseller'
  	})
  },
  methods:{
  	get() {
  		console.log(this.seller);
  	}
  },
  created() {
		this.$store.dispatch("getSeller");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header-bd{
	width: 100%;
	height: 1.76rem;
	position: absolute;
	left: 0px;
	top: 0px;
	-webkit-filter: blur(10px);
	img{
		background: rgba(0,0,0,0.8);
		width: 100%;
		height: 100%;
		display: block;
	}
}
.get{
	float: left;
	width: 100%;
	/*display: none;*/
}
.header-top{
	float: left;
	width: 100%;
	padding-top: 0.24rem;
	padding-bottom: 0.24rem;
	background: rgba(0,0,0,0.2);
	&>div{
		float: left;
		width: 1.28rem;
		height: 1.28rem;
		border-radius: 0.04rem;	
		margin-left: 0.48rem;
	}
}
.header-title{
	width: 4.32rem;
	margin-left: 0.32rem;
	float: left;
	color: white;
	li{
		float: left;
		width: 100%;
		*{
			float: left;
		}
	}
	.li01{
		span{
			width: 0.6rem;
			height: 0.4rem;
			background: red;
			
			text-align: center;
			line-height: 0.4rem;
		}
		h3{
			padding-left: 0.2rem;
		}
	}
	.li02{
		margin-top: 0.1rem;
		p{
			font-size: 0.2rem;
		}
	}
	.li03{
		margin-top: 0.1rem;
		.detail-in{
			position: absolute;
			right: 0.2rem;
			top: 0.05rem;
			height: 0.3rem;
			width: 0.7rem;
			line-height: 0.3rem;
			padding-left: 0.2rem;
			background: rgba(0,0,0,0.4rem);
			border-radius: 0.3rem;
			font-size: 0.16rem;
		}
	}
}
.header-news{
	width: 100%;
	height: 0.4rem;
	float: left;
	line-height: 0.4rem;
	background: rgba(0,0,0,0.6);
	font-size: 0.2rem;
	color: white;
	*{
		float: left;
	}
	span{
		margin: 0.07rem;
		margin-left: 0.2rem;
		height: 0.26rem;
		line-height: 0.26rem;
		background: white;
		color: rgba(0,0,0,0.6);
		font-weight: 600;
	}
	p{
		width: 5.4rem;
	}
	label{
		position: absolute;
		right: 0.1rem;
	}
}
.detail-box{
	overflow-y:auto ;
	z-index: 200;
	position: fixed;
	left: 0px;
	top: 0px;width: 100%;
	height: 100%;
	background: rgba(7,17,27,0.8);
	color: white;
	section{
		overflow: hidden;
		min-height:100% ;
	}
	.detail-name{
		text-align: center;
		margin-top: 0.64rem;
	}
	.detail-star{
		padding-top: 0.2rem;
		width: 3rem;
		margin: auto;
	}
	.detail-pre{
		font-size: 0.2rem;
		padding-top: 0.5rem;
		overflow: hidden;
		width: 5rem;
		margin-left: 0.7rem;
	}
	.close{
		float: left;
		height: 2rem;
		line-height: 2rem;
		width: 100%;
		text-align: center;
		position: absolute;
		left: 0px;
		bottom:0rem;
	}
}
.line-name{
			text-align: center;
			margin-bottom: 0.3rem;
			&::before{
				content: "";
				height: 1px;
				width: 1.8rem;
				background: rgba(255,255,255,0.4);
				position: absolute;
				left: 0px;
				top: 50%;
			}
			&::after{
				content: "";
				height: 1px;
				width: 1.8rem;
				background: rgba(255,255,255,0.4);
				position: absolute;
				right: 0px;
				top: 50%;
			}
		}
.bulletin{
	line-height: 0.34rem;
}		
.detail-out-enter,.detail-out-leave-active{
	opacity: 0;
}
.detail-out-enter-active,.detail-out-leave-active{
	-webkit-transition:0.4s ease-in-out
}
</style>
