<template>
	<div id="home">
		<home-header></home-header>
		<home-swiper :list="bannerList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list='recommendList'></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './components/homeHeader';
	import HomeSwiper from '@/pages/swiper/swiper';
	import HomeIcons from './components/homeIcons';
	import HomeRecommend from './components/homeRecommend';
	import HomeWeekend from './components/HomeWeekend';

	import axios from 'axios';
	import {mapState} from 'vuex';

	export default {
		name:'Home',
		data(){
			return{
				loadCity:'',
				bannerList:[],
				iconList:[],
				recommendList:[],
			    weekendList:[]
			}
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			getHomeInfo:function(){
				axios('/api/index.json?city=' + this.city)
					.then(this.getHomeInfoSucc);
			},
			getHomeInfoSucc:function(res){
				var res = res.data;
				if(res.ret && res.data){
					this.bannerList = res.data.swiperList;
					this.iconList = res.data.iconList;
					this.recommendList = res.data.recommendList;
					this.weekendList = res.data.weekendList;
				}
			}
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		mounted(){
			this.loadCity = this.city;
			this.getHomeInfo();
		},
		activated(){
			if(this.loadCity !== this.city){
				this.getHomeInfo();
			}
		}
	}
</script>

<style></style>