<template>
  <div class="carcontrol">
  	<button @click.stop="reduce">-</button>
  	<div>{{goodNum}}</div>
  	<button @click.stop="add">+</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data(){
		return{
			goodNum:0
		}
	},
	props:{
		boxIndex:{
			type:Number,
			default:0
		}
	},
	methods:{
		reduce(){
			this.goodNum--;
			if(this.goodNum<=0){
				this.goodNum = 0;
			};
			this.$emit("renduce");
		},
		add(){
			this.goodNum++;
			if(this.goodNum>=99){
				this.goodNum = 99;
			};
			this.$emit("add");
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
button{
	width: 0.4rem;
	height: 0.4rem;
}
</style>
