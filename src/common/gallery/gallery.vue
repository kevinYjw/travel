<template>
	<div class="gallery flex" @click="close">
		<div class="wrapper">
			<swiper v-if="gallaryImgs.length" :options="swiperOptions">
	            <swiper-slide v-for="item in gallaryImgs" :key="item.id" class="gallery-img"><img :src="item" alt="" width="100%"></swiper-slide>
	            <div class="swiper-pagination"  slot="pagination"></div>
        	</swiper>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name:'CommonGallery',
		props:{
			gallaryImgs:Array
		},
		data(){
			return {
				swiperOptions: {
					pagination: '.swiper-pagination',
					paginationType: 'fraction',
					observeParents: true,
					observer: true
				}
			}
		},
		methods:{
			close(){
				this.$emit('close');
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.gallery
		flex-direction:column;
		justify-content:center;
		position:fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		background-color:#000;
		z-index:99;
		.gallery-img
			width:100%;
			height:0;
			padding-bottom:100%;
</style>