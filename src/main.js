// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex
import store from './store'
//page
import Goods from './components/Contents/Goods'
import Ratings from './components/Contents/Ratings'
import Seller from './components/Contents/Seller'
import Detail from './components/Contents/Detail'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */

const router = new VueRouter({
	routes:[
				{ path: '/', component: Goods },
				{ path: '/goods', component: Goods,
					children:[
						{
							path:'detail/:goodID',
							name:'detail',
							component:Detail
						}
					]
				},
				{ path: '/evaluate', component: Ratings },
				{ path: '/seller', component: Seller },
			]
});


const app = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


//new Vue({
//el: '#app',
//render: h => h(App)
//})
