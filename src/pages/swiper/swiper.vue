<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in list" :key="item.id"><img :src="item.imgUrl" alt="" width="100%"></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	export default {
		name:'HomeSwiper',
        data(){
            return {
                swiperOption:{
                    pagination: '.swiper-pagination',
                    loop: true
                }
            }
        },
        props:{
            list:Array
        }
	}
</script>

<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background: #fff
</style>