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
					  			<label>{{item.rateTime}}</label>
					  		</div>
					  		<div v-if="isOut.star" class="star">
					  			<v-star
					  				:starNum="item.score"
					  				></v-star>
					  			<span>{{item.deliveryTime}}</span>
					  		</div>
					  		<p v-if="isOut.text">{{item.text}}</p>
					  		<div class="two" v-if="isOut.common">
					  			<span>{{item.rateType}}</span>
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
import Star from "../star/Star"
import Bscroll from 'better-scroll'
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
		}
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
				this._rateScroll();
				this.showindex = i;
		},
		listShow(){
				this.rateShow = !this.rateShow;
				this._rateScroll()
				this.$emit("isshow",this.rateShow);
		},
		_rateScroll(){
			this.rateingScroll = new Bscroll(this.$refs.ratewrapper,{
				click:true
			});
		}
	},
	mounted(){
		//暂时没有找到 好的办法解决  异步得问题(暂留问题)
		let timer = setTimeout(() => {
			this._rateScroll();
			clearTimeout(timer);
		},100);
	}
}	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.rate-list{
	section{
		overflow: hidden;
	}
}
.ratemain{
	display: none;
}
.rate-box{
	overflow: hidden;
	padding: 0 0.2rem;
	.rate-select{
		width: 100%;
		margin:0.1rem 0;
		overflow:hidden;
		li{
			float: left;
			width:1.2rem;
			height: 0.4rem;
			font-size: 0.21rem;
			line-height: 0.4rem;
			height: 0.4rem;
			text-align: center;
			background: rgba(0,160,220,0.2);
			margin-left: 0.2rem;
		}
		li:nth-of-type(1){
			margin: 0;
		}
		.back{
			background: rgba(77,85,93,0.2);
		}
		.active{
			background: #00a0dc;
			color: white;
		}
		.active02{
			background: #4d555d;
			color: white;
		}
	}
	.isshow{
		height: 0.5rem;
		overflow: hidden;
		span{
			float: left;
			background: dodgerblue;
			height: 0.3rem;
			width: 0.3rem;
			margin-top: 0.1rem;
		}
		.span-show{
			background: blueviolet;
		}
		p{
			float: left;
			width: 5rem;
			margin-left: 0.1rem;
			line-height: 0.5rem;
		}
	}
	.rate-container{
		padding: 0 0.2rem;
		overflow: hidden;
		>div{
			overflow: hidden;
		}
		.logo{
			float: left;
			img{
				width: 0.4rem;
				height: 0.4rem;
			}
		}
		.main{
			float: left;
			margin-left: 0.2rem;
			width: 3rem;
		}
	}
}
.rate-wrapper{
	overflow: hidden;
	width: 100%;
	height: 4.59rem;
}
.rateblock{
	display: block;
}
</style>
