<template>
  <div>
     <!-- <swiper ref="hits" :auto-update="true" class="actor-list" :options="swiperOption">
        <swiper-slide v-for="(slide, key) in swiperList" :key="key" >
            <div align="center"><img :src="slide" alt=""></div>
        </swiper-slide> -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"  @click="prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
    </swiper> -->

    <!-- 把需要生成截圖的元素放在一個元素容器裡,設定一個ref -->
    <div ref="imageTofile">
      <!-- 這裡放需要截圖的元素,自定義元件元素也可以 -->
      <div>我是擷取的內容</div>
      <div>我是擷取的內容</div>
      <div>我是擷取的內容</div>
      <div>我是擷取的內容</div>
      <div>我是擷取的內容</div>
    </div>
    <!-- 如果需要展示擷取的圖片,給一個img標籤 -->
    <img :src="htmlUrl" v-show="isShow" />
    <button @click="toImage">擷取</button>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import html2canvas from "html2canvas";
export default {
    name:'work',
    components: {
        Swiper,
        SwiperSlide,
        html2canvas
    },
    data(){
        return {
            // swiperList :[
            //     'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            //     'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
            // ],
            // swiperOption: {
            //     autoplay: {
            //         disableOnInteraction: false,  // 使用者操作swiper之後，是否禁止autoplay
            //         delay: 3000, // 自動切換的時間間隔（單位ms）
            //     },
            //     initialSlide: 0,
            //     loop: true,
            //     // pagination: { el: '.swiper-pagination' }, // 分頁按鈕
            //     paginationClickable: true,
            //     onSlideChangeEnd: swiper => {
            //     //console.log('onSlideChangeEnd', swiper.realIndex)
            //     }
            // },
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev'
            // },

            htmlUrl: "",
            isShow: false,
        }
    },
    methods: {
        // prev(){
        //     this.$refs.hits.$swiper.slidePrev();
        // },
        // next(){
        //     this.$refs.hits.$swiper.slideNext();
        // },

        // 頁面元素轉圖片
    toImage() {
      // 第一個引數是需要生成截圖的元素,第二個是自己需要配置的引數,寬高等
      html2canvas(this.$refs.imageTofile, {
        backgroundColor: null,
      }).then((canvas) => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url; // 把生成的base64點陣圖片上傳到伺服器,生成線上圖片地址
        if (this.htmlUrl) {
          // 渲染完成之後讓圖片顯示，用v-show可以避免一些bug
          this.isShow = true;
        }
        // this.sendUrl();
      });
    }, // 圖片上傳伺服器
    },
}
</script>

<style>
    /* .swiper-pagination{
        color: #000;
        width: 20px;
        height: 20px;
    } */
</style>