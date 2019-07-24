<template>
	<div class="detail">
		<detail-header></detail-header>
		<detail-banner :detailData="detailData"></detail-banner>
		<detail-list :list="detailData.categoryList"></detail-list>
		<div style="height:50rem;"></div>
	</div>
</template>

<script>
	import DetailBanner from './components/detailBanner';
	import DetailHeader from './components/detailHeader';
	import DetailList from './components/DetailList';

	import axios from 'axios';

	export default {
		name:'Detail',
		data(){
			return {
				detailData:{}
			}
		},
		methods:{
			getDetailData(){
				axios('/api/detail.json',{
					params:{
						id:this.$route.params.id
					}
				}).then(this.setDetailData);
			},
			setDetailData:function(res){
				res = res.data;
				if(res && res.data){
					this.detailData = res.data;
				}
			},
		},
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		mounted(){
			this.getDetailData();
		}
	}
</script>

<style lang="stylus" scoped>
</style>