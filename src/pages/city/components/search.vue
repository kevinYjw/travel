<template>
	<div>
		<div class="search fs14">
			<input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li class="search-item fs14" v-for="item in list" @click="chooseCity(item.name)">{{item.name}}</li>
				<li class="search-item fs14" v-show="list.length == 0">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll';

	import {mapMutations} from 'vuex';

	export default {
		name:'CityHeader',
		props:{
			cities:Object
		},
		data (){
			return {
				keyword:'',
				timer:null,
				list:[],
			}
		},
		methods:{
			chooseCity(city){
				this.changeCity(city);
				this.$router.push('/');
			},
			...mapMutations(['changeCity'])
		},
		watch:{
			keyword (){
				if(this.timer){
					clearTimeout(this.timer);
				}
				if (!this.keyword) {
					this.list = []
					return;
				}
				const result = [];
				this.timer = setTimeout(() => {
					for (let i in this.cities){
						this.cities[i].forEach((value) => {
							if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
								result.push(value);
							}
						})
					}
					this.list = result;
				},200)
			}
		},
		mounted(){
			this.scroll = new Bscroll(this.$refs.search);
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'
	
	.search
		height:.72rem;
		background-color:$themeBgColor;
		padding:0 .1rem;
		.search-input
			width:100%;
			height:.62rem;
			padding:0 .2rem;
			line-height:.62rem;
			text-align:center;
			border-radius:.24rem;
			color:#666;
			box-sizing:border-box;
	.search-content
		position:absolute;
		top:1.58rem;
		left:0;
		right:0;
		bottom:0;
		background-color:#eee;
		overflow:hidden;
		z-index:1;
		.search-item
			height:.62rem;
			line-height:.62rem;
			background-color:#fff;
			color:#666;
			padding-left:.2rem;
			box-sizing:border-box;
</style>