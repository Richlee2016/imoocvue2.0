<template>
	<div class="goods">
	  <ul class="goods-nav" ref="a">
	  	<li></li>
	  </ul>
	  <ul class="goods-wraper">
	  	<li></li>
	  </ul>
	  <!--<div @click="get">get</div>-->
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    
    }
  },
  props:{
      propsmes:{
      	
      }
  },  
  computed:{
  	...mapGetters({
  		allGoods:"allgoods"
  	})
  },
  methods:{
  	get() {
  		console.log(this.allGoods);
  	}
  },
  created(){
  	this.$store.dispatch("getGoods");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.goods{
	width: 100%;
	height: 100%;
	>ul{
		height: 100%;
	}
	.goods-nav{
		width: 1.6rem;
		float: left;
		background: #f3f5f7;
		li{
			height: 1.08rem;
		}
	}
	.goods-wraper{
		width: 5.8rem;
		float: left;
	}
}
</style>
