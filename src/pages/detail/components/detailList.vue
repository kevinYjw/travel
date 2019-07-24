<template>
	<div class="detailList">
		<div class="item" v-for="item in list" v-if="list.length > 0">
			<div class="title">
				<div class="item-title-icon"></div>
				{{item.title}}
			</div>
			<div v-if="item.children" class="item-chilren">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailList',
		props:{
			list:Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'
	.item-title-icon
		position: relative
		left: .06rem
		top: .06rem
		display: inline-block
		width: .36rem
		height: .36rem
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
		margin-right: .1rem
		background-size: .4rem 3rem
	.title
		line-height: .8rem
		font-size: .32rem
		padding: 0 .2rem
	.item-chilren
		padding: 0 .2rem
</style>