<template>
  <div>
     <swiper ref="hits" :auto-update="true" class="actor-list" :options="swiperOption">
        <swiper-slide v-for="(slide, key) in swiperList" :key="key" >
            <div align="center"><img :src="slide" alt=""></div>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"  @click="prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    name:'work',
    components: {
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            swiperList :[
                'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            ],
            swiperOption: {
                autoplay: {
                    disableOnInteraction: false,  // 使用者操作swiper之後，是否禁止autoplay
                    delay: 3000, // 自動切換的時間間隔（單位ms）
                },
                initialSlide: 0,
                loop: true,
                // pagination: { el: '.swiper-pagination' }, // 分頁按鈕
                paginationClickable: true,
                onSlideChangeEnd: swiper => {
                //console.log('onSlideChangeEnd', swiper.realIndex)
                }
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
        }
    },
    methods: {
        prev(){
            this.$refs.hits.$swiper.slidePrev();
        },
        next(){
            this.$refs.hits.$swiper.slideNext();
        },
    },
}
</script>

<style>
    .swiper-pagination{
        color: #000;
        width: 20px;
        height: 20px;
    }
</style>