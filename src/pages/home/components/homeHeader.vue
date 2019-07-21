<template>
	<div class="homeHeader flex">
		<div class="icon  iconfont icon-arrow-left"></div>
		<input type="text" class="inputWrap" placeholder="输入城市/景点/游玩主题">
		<router-link to="/city">
			<div class="address flex">
				<div class="fs14">三亚</div>
				<div class="icon  iconfont icon-sanjiao"></div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name:'homeHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'
	.homeHeader
		align-items:center;
		padding:.16rem 0;
		box-sizing:border-box;
		background-color:$themeBgColor;
		.icon
			width:.4rem;
			height:.4rem;
			flex:0 0 .4rem;
			color:#fff;
		.icon-arrow-left
			padding:0 .2rem;
		.inputWrap
			flex:1;
			height:30px;
			border:none;
			outline:none;
			background-color:#fff;
			border-radius:.24rem;
			padding:0 .32rem;
			color:#eee;
		.address
			align-items:center;
			padding:0 .2rem;
			color:#fff;
</style>