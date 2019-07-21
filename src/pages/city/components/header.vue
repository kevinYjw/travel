<template>
	<div class="header fs14">
		城市选择
		<router-link to="/">
			<div class="iconfont icon-arrow-left"></div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'CityHeader',
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'

	.header
		position:relative;
		height:.86rem;
		line-height: .86rem;
		text-align: center;
		color:#fff;
		background-color:$themeBgColor;
		.iconfont
			position:absolute;
			top:50%;
			left:.32rem;
			transform:translateY(-50%);
			color:#fff;
</style>