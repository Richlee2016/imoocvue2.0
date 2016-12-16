<template>
  <div class="star-box" :class="starSize">
  	<span v-for="item in starAllNum" :class="item" class="star"></span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
const STAR_ON = "star-on";
const STAR_OFF = "star-off";
const STAR_HALF = "star-half";
export default {
	props:{
		starSize:{
			type:Number,
			default:1
		},
		starAll:{
			type:Number,
			default:5
		},
		starNum:{
			type:Number,
			default:0
		}
	},
  data () {
    return {
    }
  },
  computed:{
  	starAllNum(){
  		let starArr = [],i;
  		//半星计算
			let starfloor = Math.floor(this.starNum*2)/2;
			//是否有半星
			let starmor = starfloor%1;
			//添加全星
			for( i=0; i<starfloor; i++){
				starArr.push(STAR_ON);
			};
			//添加半星
			if(starmor){
				i++;
				starArr.push(STAR_HALF);
			};
			//添加空星
			while(i != this.starAll ){
				i++;
				starArr.push(STAR_OFF);
			};
			return starArr;
  	}
  },
  methods:{
  	
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.star-box{
	overflow: hidden;
	height: 0.4rem;
	span{
		float: left;
		margin: 0rem 0.1rem;
		width: 0.4rem;
		height: 0.4rem;
	}
	.star-on{
		background: yellowgreen;
	}
	.star-half{
		background: cornflowerblue;
	}
	.star-off{
		background: royalblue;
	}
}
</style>
