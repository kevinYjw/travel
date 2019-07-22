<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="title fs14">当前城市</div>
			<div class="area">
				<div class="area-item"><div class="fs14 area-btn">{{city}}</div></div>
			</div>
			<div class="title fs14">热门城市</div>
			<div class="area">
				<div class="area-item" v-for="item in hotCities"><div class="fs14 area-btn" @click="chooseCity(item.name)">{{item.name}}</div></div>
			</div>
			<div class="p-list" v-for="(item,key) in cities" :ref="key">
				<div class="title fs14">{{key}}</div>
				<div class="item fs14">
					<div class="item-list" v-for="cityItem in item" @click="chooseCity(cityItem.name)">{{cityItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import {mapState,mapMutations} from 'vuex';

	export default {
		name:'CityList',
		props:{
			hotCities:Array,
			cities:Object,
			letter:String,
		},
		methods:{
			changeList(){
				let ele = this.$refs[this.letter][0];
				this.scroll.scrollToElement(ele,200);
			},
			chooseCity(city){
				this.changeCity(city);
				this.$router.push('/');
			},
			...mapMutations(['changeCity'])
		},
		watch:{
			letter(){
				if(this.letter){
					this.changeList();
				}
			}
		},
		computed:{
			...mapState(['city']),
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper);
		},
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'
	.list
		position:absolute;
		top:1.58rem;
		left:0;
		right:0;
		bottom:0;
		overflow:hidden;
		.title
			height:.54rem;
			line-height:.54rem;
			padding-left:.2rem;
			box-sizing:border-box;
			background: #eee;
			color:#666;
		.area
			overflow:hidden;
			padding:.1rem .6rem .1rem .1rem;
			.area-item
				width:33.33%;
				float:left;
				.area-btn
					margin:.1rem;
					padding:.1rem 0;
					text-align:center;
					border-radius:.2rem;
					border:.02rem solid #ccc;
		.p-list
			.item-list
				line-height:.76rem;
				padding-left:.2rem;
				overflow:hidden;
				border-bottom:.02rem solid #ccc;
</style>