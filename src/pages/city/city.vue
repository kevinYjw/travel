<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="alphabetKeyChange"></city-alphabet>
	</div>
</template>

<script>
	import CityHeader from './components/header'
	import CitySearch from './components/search'
	import CityList from './components/list'
	import CityAlphabet from './components/alphabet'

	import axios from 'axios';

	export default {
		name:'City',
		data(){
			return {
				cities:{},
				hotCities:[],
				letter:''
			}
		},
		methods:{
			getCityData(){
				axios('api/city.json')
					.then(this.setCityData);
			},
			setCityData(res){
				res = res.data;
				if(res.ret && res.data){
					this.cities = res.data.cities;
					this.hotCities = res.data.hotCities;
				}
			},
			alphabetKeyChange(value){
				this.letter = value;
			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		mounted(){
			this.getCityData();
		}
	}
</script>

<style></style>