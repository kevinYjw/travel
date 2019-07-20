<template>
	<div class="homeIcons">
		<swiper>
            <swiper-slide v-for="pagesItem in pages" class="flex swiper">
            	<div class="item flex" v-for="item in pagesItem">
            		<div class="item-img">
            			<img :src="item.imgUrl" alt="" width="100%">
            		</div>
            		<div class="text fs12">{{item.desc}}</div>
            	</div>
            </swiper-slide>
        </swiper>
	</div>
</template>

<script>
	export default {
		name:'homeIcons',
		props:{
			list:Array
		},
		computed:{
			pages(){
				var json = {}
				this.list.forEach((item,index) => {
					var pageIndex = Math.floor(index / 8);
					if(!json[pageIndex]){
						json[pageIndex] = [];
						json[pageIndex].push(item);
					} else {
						json[pageIndex].push(item);
					}
				})
				return json;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.homeIcons
		width:100%;
		height:0;
		padding-bottom:50%;
		.swiper
			flex-wrap:wrap;
			.item
				flex-direction:column;
				width:25%;
				height:0;
				padding-bottom:25%;
				.item-img
					width:60%;
					margin:0 auto;
				.text
					height:.44rem;
					text-align:center;
</style>