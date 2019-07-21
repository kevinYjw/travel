<template>
	<div class="alphabet flex fs14">
		<div 
		class="item" 
		v-for="item in letters" 
		@click="getAlphabetKey"
		@touchstart="listTouchStart"
		@touchmove="listTouchMove"
		@touchend="listTouchEnd"
		:ref="item"
		>{{item}}</div>
	</div>
</template>

<script>

	export default {
		name:'CityAlphabet',
		props:{
			cities:Object
		},
		data(){
			return {
				touchStartType:false,
				startY:0,
				timer:null,
			}
		},
		methods:{
			getAlphabetKey(e){
				let value = e.target.innerHTML;
				this.$emit('change',value);
			},
			listTouchStart(){
				this.touchStartType = true;
			},
			listTouchMove(e){
				if(this.touchStartType){
					if(this.timer){
						clearTimeout(this.timer);
					}
					this.timer = setTimeout(() => {
						let touchY = e.touches[0].clientY - 79;
						let index = Math.floor((touchY - this.startY) / 20);
						if(index >= 0 && index < this.letters.length){
							this.$emit('change',this.letters[index])
						}
					},20)
				}
			},
			listTouchEnd(){
				this.touchStartType = false;
			},
		},
		computed:{
			letters(){
				let arr = []
				for (let i in this.cities){
					arr.push(i);
				}
				return arr;
			}
		},
		updated(){
			this.startY = this.$refs['A'][0].offsetTop;
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../../styles/app.styl'
	
	.alphabet
		justify-content:center;
		flex-direction:column;
		position:absolute;
		top:1.58rem;
		right:0;
		bottom:0;
		width:.4rem;
		.item
			text-align:center;
			color:$themeBgColor;
			 line-height: .4rem
</style>