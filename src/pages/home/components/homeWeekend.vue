<template>
	<div class="homeRecommend">
		<div class="title fs14">热销推荐</div>
		<ul>
			<li class="item" v-for="item in list">
				<div class="item-img"><img :src="item.imgUrl" alt="" width="100%" height="100%"></div>
				<div class="content">
					<div class="caption ellipsis fs16">{{item.title}}</div>
					<div class="desc ellipsis fs14">{{item.desc}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'homeRecommend',
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>
	.title
		height:.8rem;
		line-height:.8rem;
		padding:0 .32rem;
		background-color:#eee;
	.item
		box-sizing:border-box;
		.item-img
			width:100%;
		.content
			flex:1;
			line-height:.45rem;
			min-width: 0;
			padding:.05rem .2rem .2rem .2rem;
			.desc
				color:#ccc
</style>