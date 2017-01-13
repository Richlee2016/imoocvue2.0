<template>
  <div class="carcontrol">
  	<transition name="min-out">
  		<span class="reduce" v-show="minShow" @click.stop="reduce">-</span>
  	</transition>
  	<div v-show="minShow" class="carnum">{{num}}</div>
  	<span class="add" @click.stop="add">+</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	data(){
		return{
			goodNum:0,
			minShow:false,
			num:0
		}
	},
	props:{
		boxIndex:{
			type:Number,
			default:0
		},
		propsNum:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	methods:{
		reduce(){
			this.$emit("renduce");
			this.num = this.propsNum.count;
			if(this.num === 0){
				this.minShow = false;
			};
		},
		add(){
			this.$emit("add");
			this.num = this.propsNum.count;
			if(this.num > 0){
				this.minShow = true;
			};
		}
	},
	created (){
		this.num = this.propsNum.count;
		if(this.num === 0){
				this.minShow = false;
		};
		if(this.num > 0){
				this.minShow = true;
		};
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.carcontrol{
	width: 1rem;
	overflow: hidden;
	float: right;
	*{
		float: left;
	}
	span{
		width: 0.3rem;
		height: 0.3rem;
		border-radius: 0.34rem;
		background: #00a0dc;
		color: white;
		border: none;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.3rem;
		border: 1px #00a0dc solid;
	}
	.carnum{
		width: 0.26rem;
		text-align: center;
	}
	.add{
		float: right;
	}
	.reduce{
		float: left;
		background:white;
		color: #00a0dc;
	}
}
.min-out-enter-active,.min-out-leave-active{
	-webkit-transition: 0.2s ease-out;
	transition: 0.2s ease-out;
}
.min-out-enter,.min-out-leave-active{
	-webkit-transform: translateX(0.5rem) rotateZ(360deg);
	opacity: 0;
}
</style>
