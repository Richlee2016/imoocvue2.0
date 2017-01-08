<template>
  <div class="pre-box">
  	<div v-for="item in preAll" :class="item.addname" class="pre">
  		<span></span>
  		<p>{{item.description}}</p>
  	</div>
  	<!--<div>{{this.preData}}</div>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
	props:{
		preData:{
			type:Array,
			default(){
				return [];
			}
		}
	},
  computed:{
  	preAll(){
  		//如果有数据  增加一个转化类名
  		if(this.preData.length >= 0){
  			let ret = this.preData.map((o) => {
  				o.addname = 'pre_' + o.type;
  				return o;
  			});
  			return ret;
  		};
  	}
  },
  methods:{
  	get(){
  		this.preAll.forEach(function(o,i){
  			console.log(o);
  		});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.pre-box{
	width: 100%;
	height: auto;
	float: left;
	font-size: 0.16rem;
	.pre:nth-of-type(1){
		margin-top: 0px;
	}
	>div{
		width: 100%;
		height: 0.4rem;
		line-height: 0.4rem;
		margin-top: 0.1rem;
		*{
			float: left;
		}
		span{
			width: 0.4rem;
			height: 0.4rem;
			&::before{
				display: block;
				width: 0.3rem;
				height: 0.3rem;	
				text-align: center;
				line-height: 0.3rem;
				margin-top: 0.05rem;
				border-radius: 2px;		
			}
		}
	}
}
.pre_0{
	span{
		&::before{
			content: "减";
			background:#f01414;
		}
	}
}
.pre_1{
	span{
		&::before{
			content: "折";
			background:#0f93cc;
		}
	}
}
.pre_2{
	span{
		&::before{
			content: "特";
			background:#00b43c;
		}
	}
}
.pre_3{
	span{
		&::before{
			content: "票";
			color: #8e007e;
			border:#8e007e 1px solid;
		}
	}
}
.pre_4{
	span{
		&::before{
			content: "减";
			color: #00b43d;
			border:#00b43d 1px solid;
		}
	}
}
</style>
