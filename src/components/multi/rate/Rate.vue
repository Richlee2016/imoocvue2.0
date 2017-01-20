<template>
  <div class="rate-box">
  	<ul class="rate-select"> 
  		<li 
  			v-for="(item,index) in names" 
  			@click="ratename(index,$event)"
  			:class="{'back':index === 2,'active':active!=2&&active==index,'active02':active==2&&active==index}"
  			>{{item}}{{ratelist.len[index]}}</li>
  	</ul>
  	<div class="isshow" @click=listShow>
  		<span 
  			:class="{'span-show':rateShow}"
  			></span>
  		<p>只看有内容的评价</p>
  	</div>
  	<div class="rate-wrapper" ref="ratewrapper">
	  	<div class="rate-container">
				<div class="rate-list" v-for="(rate,index) in ratelist.data" :class="{'rateblock':showindex == index,'ratemain':showindex !== index}">
				  	<section v-for="item in rate">
				  		<div class="logo">
					  		<img :src="item.avatar"/>
					  	</div>
					  	<div class="main">
					  		<div class="one">
					  			<span>{{item.username}}</span>
					  			<label>{{_time(item.rateTime)}}</label>
					  		</div>
					  		<div v-if="isOut.star" class="star">
					  			<div class="starcom">
						  			<v-star
						  				:starSize="3"
						  				:starNum="item.score"
						  				></v-star>
						  			<span>{{item.deliveryTime}}</span>
					  			</div>
					  		</div>
					  		<p v-if="isOut.text">{{item.text}}</p>
					  		<div class="two" v-if="isOut.common">
					  			<span v-if="item.rateType === 0"></span>
					  			<div>
					  				<label v-for="recomme in item.recommend">
					  					{{recomme}}
					  				</label>
					  			</div>
					  		</div>
					  		<div v-else>
					  			<span>{{item.rateType}}</span>
					  			<span>{{item.text}}</span>
					  		</div>
					  	</div>
				  	</section>
			  </div>
			  <div></div>
	  	</div>
  	</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Star from "components/multi/star/Star"
//import util from 'util/util.js'
//console.log(new Date().getTime());
//console.log(util.timego(new Date().getTime()));

export default {
	components:{
		"v-star":Star
	},
	props:{
		names:{
			type:Array,
			default:function(){
				return ["全部","满意","不满意"]
			}
		},
		ratelist:{
			type:Object,
			default:function(){
				return [];
			}
		},
		isOut:{
			type:Object,
			default(){
				return {
					star:true,
					text:true,
					common:true
				}
			}
		},
		resetScroll:""
	},
	data(){
		return {
			active:0,
			rateShow:true,
			showindex:0
		}
	},
	methods:{
		ratename(i,ev){
				this.active =i;
				this.showindex = i;
//				this.$emit('resetScroll');
		},
		listShow(){
				this.rateShow = !this.rateShow;
				this.$emit("isshow",this.rateShow);
		},
		_time (time){
			return time+"lee";
		}
	}
}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import 'rate.scss'
</style>
