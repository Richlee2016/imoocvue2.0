<template>
	<div class="test">
	<transition name="min-out">
		<button class="min" v-show="minShow" @click="minShow = false;">-</button>
	</transition>
	<button class="plus" @click="plusgo">+</button>
	<transition
		v-on:before-enter="beforeEnter"
		v-on:enter="enter"
		v-bind:css="false"
	>
		<!--<div v-for='ball in balls' v-show="ball.ballShow" class="ball">
			<span></span>
		</div>-->
	</transition>	
	</div>
	
</template>

<script>
import Velocity from 'velocity-animate'
//import {css3} from '../../../static/js/util.js'
export default {
	data(){
		return {
			minShow:false,
			balls:[
				{
					ballShow:false,
					
				},
				{
					ballShow:false,
					
				},
				{
					ballShow:false,
					
				},
				{
					ballShow:false,
					
				}
			]
		}
	},
	methods:{
		plusgo (){
//			let i=0;
//			this.minShow = true;
//			this.balls[i++].ballShow = false;
		},
		beforeEnter (el){
//			let count
			
		},
		enter (el, done){
//			console.log(el);
//			let _this = this,
//				span = el.getElementsByTagName("span"),
//			Velocity(el, { translateY: "200px"}, { duration:400,easing:[0.49, -0.29, 0.75, 0.41]});
//			Velocity(span, { translateX: "100px",easing:"{linear"}, { duration:400,complete(){
//				_this.ballShow = false;
//				Velocity(el, { translateY: "0px"});
//				el.innerHTML = "";
//			}});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.test{
	margin-left: 600px;
	width: 120px;
	float: left;
	button{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		float: right;
		-webkit-transition: 0.4s ease-in-out;
		transition: 0.4s ease-in-out;
	}
	.min{
		float: left;
		/*-webkit-transform: translateX(100px);*/
	}
	.plus{
	}
}
.ball{
	position: absolute;
	right: 0px;
	top: 0px;
	width: 40px;
	height: 40px;
	/*-webkit-transition: 1s ease-in-out;
	transition: 1s ease-in-out;*/
	span{
		display: block;
		width: 40px;
		height: 40px;
		background: dodgerblue;
		border-radius:40px ;
	}
}
.min-out-enter,.min-out-leave-active{
	-webkit-transform: translateX(80px) rotateZ(360deg);
	opacity: 0;
}
/*.min-out-enter-active,.min-out-leave-active{
	-webkit-transition: 0.4s ease-in-out;
	transition: 0.4s ease-in-out;
}*/

</style>
