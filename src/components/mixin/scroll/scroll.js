import Bscroll from 'better-scroll'
let rateScroll = {
	methods:{
		data (){
			return {
				dom:{}
			}
		},
		_scroll (dom){
			if(dom){
				this.dom = dom;
			};
			this.rateScroll = new Bscroll(this.dom,{
	  			click:true
	  		});
		}
	}
}

export default rateScroll