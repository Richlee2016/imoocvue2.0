<template>
  <div class="star-box" :class="size">
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
		//星星大小
		starSize:{
			type:Number,
			default:1
		},
		//星星个数
		starAll:{
			type:Number,
			default:5
		},
		//评分
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
  	},
  	size (){
  		return 'star-scal' + this.starSize;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import 'star.scss';
</style>
