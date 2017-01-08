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
  		详情
  		<!-- 星星组件 -->
  		<star></star>
  		<!-- 优惠组件 -->
  		<prefer :preData="seller.supports"></prefer>
  		<p>{{seller.bulletin}}</p>
  		<div class="close" @click="detailOut = false">CLOSE</div>
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
	background: rgba(0,0,0,0.4);
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
	z-index: 200;
	position: fixed;
	left: 0px;
	top: 0px;width: 100%;
	min-height: 100%;
	background: rgba(0,0,0,0.8);
	color: white;
	.close{
		float: left;
		width: 100%;
		text-align: center;
	}
}
.detail-out-enter,.detail-out-leave-active{
	opacity: 0;
}
.detail-out-enter-active,.detail-out-leave-active{
	-webkit-transition:0.4s ease-in-out
}
</style>
