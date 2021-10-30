<template>
    <div>
        <headercom></headercom>
        <div id="vote_page_main_bar">
            <titleh1 title="主廚推薦"></titleh1>
            <p>
                <span>「老母辛苦了！！」母親節檔期活動</span>

                對媽媽的愛要大聲說，一份專屬於媽媽特別的愛，快來秀出你的創意讓大家看到

                <span>活動期間：2021/4/16~2021/6/15</span>
            </p>
        </div>
        <main id="vote_page_main">
            <search-bar></search-bar>
            <cake-selector :total_decorations="total_decorations" :total_ingredients="total_ingredients" :total_cakebodys="total_cakebodys"></cake-selector>
            <div id="select_test"></div>
            <h1 class="vote_title"><img src="" alt="" />現在排名</h1>
            <section id="topthree">
                <card-topthree v-for="(test,index) in 3" :key="index"></card-topthree>
            </section>
            <h1 class="vote_title"><img src="" alt="" />候選名單</h1>
            <section id="vote">
                <card-voting v-for="(cake_name,index) in 9" :key="index"></card-voting>
            </section>
            <pageSelect style="margin-bottom:70px;"></pageSelect>
        </main>
        
        <footercom></footercom>
        
    </div>
</template>
<script>
import $ from 'jquery'
import pageSelect from '../components/page_selector'
import headercom from '../components/headercom'
import footercom from '../components/footercom'
import searchBar from '../components/search_bar'
import cardTopthree from '../components/card_topthree'
import titleh1 from "../components/title_h1.vue";
import Search_bar from '../components/search_bar.vue'
import cakeSelector from '../components/cake_selector.vue'
import cardVoting from '../components/card_voting.vue'
import card_topthree from '../components/card_topthree.vue'
export default {
    name:'votePage',
    components:{
        titleh1,
        headercom,
        footercom,
        pageSelect,
        searchBar,
        Search_bar,
        cakeSelector,
        cardVoting,
        cardTopthree,
        card_topthree,
    },
   data(){
    return{
      show:true,
      total_cakebodys:['test',"testt"],
      total_ingredients:[5,6,7,8],
      total_decorations:[1,2,3,4]
    }
  },
    methods:{
        
    },
    watch:{
        
    },
    computed:{
        

    },
    mounted(){
       
    },

    
}

</script>
<style scoped lang="scss">
// @import "../assets/style/var.scss";
*{
    box-sizing: border-box;
}
$bg:#EFE6E4;
#vote_page_main_bar{
    width:100%;
    max-width: 1200px;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    >div{
        margin-top:100px;
    }
    p{
        // width:550px;
        text-align: center;
        margin-top:35px;
        font-size: 16px;
        line-height: 32px;
        margin-bottom:100px;
        span{
            display: block;
        }
    }
}
#vote_page_main{
    width:100%;
    max-width: 1120px;
    margin:0 auto;
    border:1px solid red;
    .search{
        position: relative;
        left:100%;
        transform: translateX(-100%);
        margin-bottom:50px;
    }
}

.vote_title{
    margin-top:100px;
    margin-left:150px;
    margin-bottom:65px;
}
#topthree{
    display:grid;
    gap:35px;
    grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
    div.vote_topthree{
        margin:0 auto;
        display: inline-block;
        position: relative;
        background-color: #F7EDD4;
        color:#515151;
        .topthree_hat{
            position:absolute;
            width:110px;
            height:110px;
            border:1px solid red;
            left:-20px;
            top:-50px;
            transform: rotate(-15deg);
        }
        .pic_cake{
            height:260px;
        }
        >div{
            padding:10px;
            h1{
                margin:0;
            }
            p{
                margin:0;
            }
        }
    }
}
@media (min-width:576px) and (max-width:870px){
    #topthree{
    display:grid;
    gap:35px;
    grid-template-areas:"one one" "second third";
    div.vote_topthree:nth-child(1){
        grid-area:one;
        transform: scale(1.1);
    }
    div.vote_topthree:nth-child(2){
        grid-area:second;
    }
    div.vote_topthree:nth-child(3){
        grid-area:third;
    }
    }
}
// 以下為參賽作品
section#vote{
    width:100%;
    max-width:1120px;
    margin:0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    gap:70px 35px;
    justify-content: space-between;
    margin-bottom:80px;
    .card_outline{
        width:100%;
        max-width: 350px;
        margin:0 auto;
        .img_container{
            width:100%;
            height:auto;
        }
    }
    
}
</style>