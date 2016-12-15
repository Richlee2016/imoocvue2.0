<template>
  <div class="header">
  	<h3>这是头部</h3>
  	<div @click='get'>ad</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    	
    }
  },
  computed:{
  	...mapGetters({
  		seller:'allseller'
  	})
  },
  methods:{
  	get() {
		console.log(this.seller);
  	}
  },
  created() {
		this.$store.dispatch("getSeller");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	height: 2.36rem;
}
</style>
