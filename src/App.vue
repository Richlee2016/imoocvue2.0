<template>
  <div id="app">
  	<v-header></v-header>
  	<ul class="tab">
  		<li><router-link to='/goods'>商品</router-link></li>
  		<li><router-link to='/evaluate'>评价</router-link></li>
  		<li><router-link to='/seller'>商家</router-link></li>
  	</ul>
  	<div class="content">
  		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  components: {
  	"v-header":Header
  },
}
</script>

<style lang="scss">
html,body{
	height: 100%;
	width: 100%;
}
.tab{
	width: 100%;
	height: 0.3rem;
	li{
		width: 33.3%;
		float: left;
		height: 0.3rem;
		a{
			display: block;
			width: 100%;
			height: 100%;
			text-align: center;
		}
	}
}
</style>
