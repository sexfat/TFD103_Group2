<template>
    <div>
        <headercom></headercom>
        <main class="shopping_cart_main">
            <titleh1 class="titleh1rwd" title="購物車"></titleh1>
            <section class="shopping_cart_bread">
                <span class="shopping_cart_page">購物車</span>
                <div class="shopping_cart_bread_arrow">
                    <img class="shopping_cart_bread_arrow_img" src="../assets/images/process_icon.svg" alt="">
                </div>
                <span class="prepare_checkout_page">準備結帳</span>
                <div class="shopping_cart_bread_arrow">
                    <img class="shopping_cart_bread_arrow_img" src="../assets/images/process_icon.svg" alt="">
                </div>
                <span class="checkout_page">結帳完成</span>
            </section>
            <section class="shopping_cart_list">
                <div class="shopping_cart_block">
                    <div class="choose_cakeandimg">
                        <input type="checkbox" name="" class="shopping_cart_check">
                        <img class="shopping_cart_img" src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                    <div class="choose_contentandcancel">
                        <span class="choose_content">
                            巧克力蛋糕<br>
                            普通蠟燭<br>
                            情人節卡片<br>
                        </span>
                        <img class="cancel_logo" src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </div>
            </section>
            <section class="shopping_cart_list">
                <div class="shopping_cart_block">
                    <div class="choose_cakeandimg">
                        <input type="checkbox" name="" class="shopping_cart_check">
                        <img class="shopping_cart_img" src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                    <div class="choose_contentandcancel">
                        <span class="choose_content">
                            巧克力蛋糕<br>
                            普通蠟燭<br>
                            情人節卡片<br>
                        </span>
                        <img class="cancel_logo" src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </div>
            </section>
            <section class="shopping_cart_button">
                <button class="return_shopping">繼續購物</button>
                <button class="goto_checkout">前往結帳</button>
            </section>
        </main>
        <footercom></footercom>
    </div>
</template>
<script>
import $ from 'jquery'
import headercom from '../components/headercom'
import footercom from '../components/footercom'
import titleh1 from "../components/title_h1.vue"
export default {
    name:'shopping_cart',
    components:{
        titleh1,
        headercom,
        footercom,
    },
    data(){
        return{
            asd:123546
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
@import "../assets/style/var.scss";
*{
    box-sizing: border-box;
}
body{
    background-color: $bg;
}

.shopping_cart_main{
    display: flex;
    flex-direction: column;
    align-items: center;
    // 購物車麵包屑
    .shopping_cart_bread{
        width: 70%;
        justify-content: space-around;
        display: flex;
        margin: 0 auto;
        font-size: $h1;
        margin-top: 150px;
        margin-bottom: 50px;
        @media screen and (max-width:767.98px){ 
            display: flex;
            margin-top: 100px;
            flex-direction: column;
            align-items: center;
            height: 250px;
        }
        .shopping_cart_page,.prepare_checkout_page,.checkout_page{
            font-size: $h1;
            max-width: 200px;
            width: 100%;
            display: flex;
            justify-content: center;
            @media screen and (max-width:767.98px){ 
                font-size: $h4;
            }
        }
        .shopping_cart_bread_arrow{
            width: 100%;
            max-width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            .shopping_cart_bread_arrow_img{
                width: 20px;
                height: 20px;
                object-fit: cover;
                @media screen and (max-width:767.98px){ 
                    width: 20px;
                    height: 20px;
                    object-fit: cover;
                    transform: rotate(90deg);
                }
            }
        }
    }
     // 購物車麵包屑結束
    .shopping_cart_list{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        max-width: 1120px;
        padding-top: 40px;
        width: 90%;
        background-color: #DFB9B0;
        border-radius: 5px;
        @media screen and (max-width:767.98px){ 
            padding-top: 40px;
            padding-bottom: 40px;
            width: 90%;
            background-color: #DFB9B0;
            border-radius: 5px;
            height: 300px;
            margin-bottom: 40px;
        }
        .shopping_cart_block{
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            max-width: 1050px;
            @media screen and (max-width:767.98px){ 
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .choose_cakeandimg{
                display: flex;
                align-items: center;
                max-width: 215px;
                width: 100%;
                justify-content: space-between;
                @media screen and (max-width:767.98px){ 
                    display: flex;
                    justify-content: space-between;
                    max-width: 700px;
                    width: 70%;
                    margin: 0 auto;
                }
                .shopping_cart_check{
                    width: 30px;   
                    height: 30px;
                    cursor: pointer;
                }
                .shopping_cart_img{
                    width: 150px;
                    height: 150px;
                }
            }
            .choose_contentandcancel{
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 800px;
                width: 100%;
                margin-left: 50px;
                @media screen and (max-width:767.98px){ 
                    display: flex;
                    max-width: 700px;
                    width: 70%;
                    margin-left: 0px;
                }
                .choose_content{
                max-width: 750px;
                width: 70%;
                }
                .cancel_logo{
                    width: 25px;
                    height: 30px;
                    cursor: pointer;
                }
            }
        }
    }
    .shopping_cart_button{
        max-width: 520px;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 100px;
        margin-top: 35px;
        display: flex;
        justify-content: space-between;
        .return_shopping,.goto_checkout{
            width: 120px;
            height: 60px;
            font-size: 20px;
            text-align: center;
            align-items: center;
            color: white;
            background-color: $darkGrey;
            cursor: pointer;
            border-radius: 10px;
            .goto_checkout:hover{
                color: $lightYellow;
            }
            .return_shopping:hover{
                color: $lightYellow;
            }
        }
    }
}


</style>