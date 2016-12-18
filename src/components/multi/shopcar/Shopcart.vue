<template>
  <div class="shopcart">
  	<div class="car-box">
  		<span>
  			<label>car</label>
  		</span>
  	</div>
  	<div class="car-pri">
  		<p>$132</p>
  		<span>另需配送费￥4元</span>
  	</div>
  	<span class="car-sub">￥20起送</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	
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
	span{
		display: block;
		width: 0.88rem;
		height: 0.88rem;
		border-radius: 0.44rem;
		margin-left: 0.06rem;
		margin-top: 0.07rem;
		background: #2b343c;
		color: white;
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
</style>
