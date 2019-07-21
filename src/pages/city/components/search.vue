<template>
	<div class="search fs14">
		<input type="text" placeholder="输入城市名或拼音" class="search-input">
	</div>
</template>

<script>
	export default {
		name:'CityHeader',
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
</style>