<template>
	<div>
		<div class="detailBanner" @click="openGalleryType">
			<img :src="detailData.bannerImg" alt="">
			<div class="banner-info fs14 flex">
				<div class="title">{{detailData.sightName}}</div>
				<div class="number flex"><div class="iconfont icon-tupian"></div>{{detailData.gallaryImgs ? detailData.gallaryImgs.length : ''}}</div>
			</div>
		</div>
		<fade-animation>
			<common-gallery :gallaryImgs="detailData.gallaryImgs || []" v-show="galleryType" @close="closeGalleryType"></common-gallery>
		</fade-animation>
	</div>
</template>

<script>
	import CommonGallery from 'common/gallery/gallery';
	import FadeAnimation from '@/pages/fade/fade';

	export default {
		name:'DetailBanner',
		props:{
			detailData:Object
		},
		data(){
			return {
				galleryType:false,
			}
		},
		methods:{
			openGalleryType(){
				this.galleryType = true;
			},
			closeGalleryType(){
				this.galleryType = false;
			}
		},
		components:{
			CommonGallery,
			FadeAnimation
		},
	}
</script>

<style lang="stylus" scoped>
	.detailBanner
		position:relative;
		height:0;
		overflow:hidden;
		padding-bottom:55%;
		img
			width:100%;
		.banner-info
			align-items:center;
			justify-content:space-between;
			position:absolute;
			left:0;
			right:0;
			bottom:0;
			color:#fff;
			padding: 0 .2rem;
			line-height:.6rem;
			box-sizing:border-box;
			background-image:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
			.number
				height:.32rem;
				line-height:.32rem;
				padding:0 .4rem;
				background: rgba(0, 0, 0, .8);
				border-radius: .2rem;
				.iconfont
					font-size:.24rem;
					margin-right:.1rem;
</style>