<template>
	<transition name="slide-fade">
	<div class="detail" v-if='detailShow'>
		<button class="backbtn" @click="quit">back</button>
		<section class="box01">
			<img :src="detailData.image"/>
			<div>{{detailData.name}}</div>
			<div>月售{{detailData.sellCount}}份,好评率{{detailData.rating}}</div>
			<div>${{detailData.price}} <s v-if='detailData.oldPrice'>{{detailData.oldPrice}}</s></div>
		</section>
		<section class="box01">
			<h3>商品介绍</h3>
			<p>{{detailData.description}}</p>
		</section>
		<v-rate
			:isOut="{star:false,text:false,common:false}"
			:ratelist="ratelist"
		  	@isshow="isshow"
		  	@select="selector"
			></v-rate>
	</div>
	</transition>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from "../../store/types"
import Rate from '../multi/rate/Rate'
export default {
	components:{
		"v-rate":Rate
	},
	data () {
	    return {
	    
	    }
	},
	computed:{
		...mapGetters({
	  		detailData:"detailgoods",
	  		ratelist:"goodrate"
	  	})
	},
	props:{
	    detailShow:{
	    	type:Boolean,
	      	default:false
	    },   
	},    
	methods:{
	  	quit(){
	  		this.$emit("close");
	  	},
	  	selector(i){
			this.$store.commit(types.APP_GOODS_RATESELECT,{index:i});
		},
		isshow(onOff){
			this.$store.commit(types.APP_GOODS_RATESHOW,{show:onOff});
		}
	},
    created(){
  		this.$store.dispatch("getRatings");
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
	z-index: 100;
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	background:white;
}
.backbtn{
	z-index: 100;
	width: 1.2rem;
	height: 0.4rem;
	position: absolute;
	left: 0px;
	top: 0px;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(6.4rem);
  opacity: 0;
}
</style>
