<template>
	<div class="detail">
		<button @click="quit">back</button>
	</div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  props:{
      propsmes:{
      	
      }
  },    
  methods:{
  	quit(){
  		this.$router.go(-1);
  	}
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
	background: rgba(0,0,0,0.8);
}
</style>
