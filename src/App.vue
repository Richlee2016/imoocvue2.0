<template>
  <div id="app">
  	<div>
  	<!--<v-header></v-header>
  	<ul class="tab">
  		<li><router-link to='/goods'>商品</router-link></li>
  		<li><router-link to='/evaluate'>评价</router-link></li>
  		<li><router-link to='/seller'>商家</router-link></li>
  	</ul></div>-->
  	<div class="content">
  		<router-view></router-view>
  	</div>
  	
  	<!--<v-shopcart></v-shopcart>-->
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Shopcart from './components/multi/shopcar/Shopcart'
export default {
  components: {
  	"v-header":Header,
  	"v-shopcart":Shopcart
  },
}
</script>

<style lang="scss">
html,body{
	height: 100%;
	width: 100%;
}
#app{
	overflow: hidden;
	height: 100%;
}
.content{
	position: absolute;
	width: 100%;
	top:2.68rem;
	bottom:1.16rem;
}
.header{
	width: 100%;
	float: left;
}
.tab{
	width: 100%;
	float: left;
	height: 0.5rem;
	border-bottom: #ddd 1px solid;
	li{
		width: 33.3%;
		float: left;
		height: 0.5rem;
		line-height: 0.5rem;
		a{
			display: block;
			width: 100%;
			height: 100%;
			text-align: center;
			font-size: 0.24rem;
		}
	}
}
.clear-line{
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7,17,27,0.1);
    border-bottom: 1px solid rgba(7,17,27,0.1);
    background: #f3f5f7;
}
</style>
