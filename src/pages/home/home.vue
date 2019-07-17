<template>
	<div id="home">
		<home-header></home-header>
		<home-swiper :list="bannerList"></home-swiper>
	</div>
</template>

<script>
	import HomeHeader from './components/homeHeader';
	import HomeSwiper from '@/pages/swiper/swiper';

	export default {
		name:'Home',
		data(){
			return{
				bannerList:[{
					"id": "0001",
					"imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
					},{
					"id": "0002",
					"imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
					},{
					"id": "0003",
					"imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
					},{
					"id": "0004",
					"imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
				}]
			}
		},
		components:{
			HomeHeader,
			HomeSwiper
		}
	}
</script>

<style></style>