<template>
	<div class="seller">
		卖家
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
  		window.localStorage.clear();
  		this.$router.push({path:'/user'});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
