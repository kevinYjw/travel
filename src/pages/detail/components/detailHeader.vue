<template>
	<div class="detailHeader">
		<router-link class="backBtn" to="/" tag="div" v-show="showAbs"><div class="icon  iconfont icon-arrow-left"></div></router-link>
		<div class="header-fixed fs16" v-show="!showAbs" :style="opacityStyle">
			<router-link to="/" tag="div" class="header-fixed-back"><div class="icon  iconfont icon-arrow-left"></div></router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailHeader',
		data(){
			return {
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handleScroll(){
				const top = document.documentElement.scrollTop
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = { opacity }
					this.showAbs = false
				} else {
					this.showAbs = true
				}
			}
		},
		mounted(){
			window.addEventListener('scroll',this.handleScroll);
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.handleScroll);
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'
	.detailHeader
		.backBtn
			position:absolute;
			top:.2rem;
			left:.2rem;
			width:.8rem;
			height:.8rem;
			text-align:center;
			line-height:.8rem;
			border-radius:50%;
			background-color:rgba(0,0,0,0.8);
			z-index:10;
			color:#fff;
		.header-fixed
			position:fixed;
			top:0;
			left:0;
			right:0;
			height:.86rem;
			line-height:.86rem;
			text-align:center;
			background-color:$themeBgColor;
			color:#fff;
			z-index:10;
			.header-fixed-back
				position:absolute;
				top:0;
				left:0;
				width:.64rem;
				text-align:center;
</style>