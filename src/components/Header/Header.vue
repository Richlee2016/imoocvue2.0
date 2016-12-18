<template>
  <div class="header">
  	<div class="header-top">
  		<div>
  			<!--<img src="../../../../vue-tutorial/src/assets/logo.png"/>-->
  		</div>
  		<ul class="header-title">
  			<li class="li01">
  				<span>品牌</span>
  				<h3>巴拉巴拉小魔仙</h3>
  			</li>
  			<li class="li02">
  				<p>巴拉巴拉小魔仙</p>
  			</li>
  			<li class="li03">
  				<label>减</label>
  				<p>巴拉巴拉小魔仙</p>
  				<div @click="tetailOut = true">5个</div>
  			</li>
  		</ul>
  	</div>
  	<div class="header-news">
  		<span>公告</span>
  		<p>巴拉巴拉小魔仙</p>
  	</div>
  	<div v-if="tetailOut" class="detail-box">
  		详情
  		<!-- 星星组件 -->
  		<star :starNum='seller.scropt'></star>
  		<!-- 优惠组件 -->
  		<prefer :preData="seller.supports"></prefer>
  		<p>{{seller.bulletin}}</p>
  		<div class="close" @click="tetailOut = false">CLOSE</div>
  	</div>
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
    	tetailOut:false
    }
  },
  components:{
  	Star,Prefer
  },
  computed:{
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
.get{
	float: left;
	width: 100%;
	/*display: none;*/
}
.header-top{
	float: left;
	width: 100%;
	margin-top: 0.48rem;
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
	li{
		float: left;
		width: 100%;
		*{
			float: left;
		}
	}
}
.header-news{
	width: 100%;
	height: 0.4rem;
	float: left;
	line-height: 0.4rem;
	background: rgba(0,0,0,0.2);
	*{
		float: left;
	}
}
.detail-box{
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
</style>
