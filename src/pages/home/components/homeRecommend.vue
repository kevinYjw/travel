<template>
	<div class="homeRecommend">
		<div class="title fs14">热销推荐</div>
		<ul>
			<li class="item flex" v-for="item in list" @click="toDetail(item.id)">
				<div class="item-img"><img :src="item.imgUrl" alt="" width="100%"></div>
				<div class="content">
					<div class="caption ellipsis fs16">{{item.title}}</div>
					<div class="desc ellipsis fs14">{{item.desc}}</div>
					<div class="btn fs14">查看详情</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'homeRecommend',
		methods:{
			toDetail(id){
				this.$router.push(`/detail/id=${id}`)
			}
		},
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
		padding:5px;
		box-sizing:border-box;
		.item-img
			width:1.7rem;
			height:1.7rem;
		.content
			flex:1;
			line-height:.45rem;
			min-width: 0;
			padding:.1rem;
			.desc
				color:#ccc
			.btn
				width:1.4rem;
				text-align:center;
				padding:0 .2rem;
				line-height:.44rem;
				background-color:#ff9300;
				color:#eee;
				border-radius:.06rem;
				margin-top:.2rem;
</style>