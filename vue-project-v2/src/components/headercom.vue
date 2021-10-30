<template>
    <header class="header">
        <div class="header_box">
            <a href="" id="logo">
                <img src="../assets/images/logo.png">
            </a>
            <ul class="header_nav">
                <div id="header_div_one">
                    <!-- RWD漢堡選單 才會出現的背景圖 -->
                    <img id="hamburger_img" src="../assets/images/snowRWD.svg" alt="">
                    <!-- RWD漢堡選單 才會出現的背景圖 -->   
                    <li class="nav_item"><a href="">蛋糕設計</a></li>
                    <li class="nav_item"><a href="">人氣票選</a></li>
                    <li class="nav_item"><a href="">商城</a></li>
                    <li class="nav_item"><a href="">QA</a></li>
                </div>

                <div id="header_div_two">
                    <router-link to="/member_data">
                        <!-- 此處僅先測試路由連結，實際要依是否登入會員來導向 -->
                        <li class="nav_icon"><a href=""><img src="../assets/images/member.svg" alt=""></a></li>
                    </router-link>
                    <li class="nav_icon"><a href=""><img src="../assets/images/shoppingCar.svg" alt=""></a></li>
                </div>
            </ul>
            
            <div id="header_div_two_two">
                <li class="nav_icon"><a href=""><img src="../assets/images/member.svg" alt=""></a></li>
                <li class="nav_icon"><a href=""><img src="../assets/images/shoppingCar.svg" alt=""></a></li>
            <!-- RWD漢堡選單 -->
            <a class="hamburger" href="">
                <span class="hamburger_icon"></span>
                <span class="hamburger_icon"></span>
                <span class="hamburger_icon"></span>
            </a>
            </div>
        </div>
    </header>
</template>
<script>
import $ from 'jquery'
export default {
    name:"headercom",
    mounted() {
        // header陰影
        // console.log(window);

        $(document).ready(function(){
            $(window).bind('scroll',function(){
                if($(window).scrollTop() > 80){
                    $('header').addClass('shadow');
                }else{
                    $('header').removeClass('shadow');
                }
            });
        });
        // 漢堡選單
        $(document).ready(() => {
                $('.hamburger').click(function(){
                    event.preventDefault();
                        
                    $('.header_nav').toggleClass('show');
                    $("li.nav_item").css({"margin":20,});
                    // $("img.eggBeater").css({"width":18,"display":"block"})  
                })
                $('.header_nav div li a').click(function(){
                        
                    $('.header_nav').removeClass('show');
                })
            });
    },
}
</script>
<style scoped lang="scss">
    @import "../assets/style/var.scss";
    // *{
    //  box-sizing: border-box;
    //  list-style-type: none;
    // }
    // body{
    //     margin: 0;
    //     position: relative;
    //     background-color: #EFE6E4;
    //     height: 1000px;
    // }
    // header陰影
    header.header.shadow{
            box-shadow: 0px 3px 5px 0px hsla(0, 0%, 0%, .2);
        }
    header.header{
        height: 80px;
        background-color: #DFB9B0;
        padding:0px 30px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        // 無條件最上層
        z-index: 9999;
        div.header_box{
        height: 80px;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        // margin-left: auto;
        // margin-right: auto;
            a#logo{
                height: 70px;
                display: flex;
                align-items: center;
                img{
                    height: 100%;
                }
            }
            ul.header_nav{
                padding: 0;
                display: flex;
                justify-content: space-between;
                overflow: hidden;
                div#header_div_one{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    li.nav_item{
                        text-align: center;
                        list-style-type: none;
                        margin: 0px 16px;
                        a{
                            color: #515151;
                            text-decoration: none;
                            font-size: 18px;
                            &:hover{
                                color: #9F746B;
                            }
                        }
                    }
                }
            }
        }
    }
            div#header_div_two::before{
                content:'';
                width: 50px;
                display: flex;
            }
            div#header_div_two{
                display: flex;
                justify-content: center;
                align-items: center;
                li.nav_icon{
                    text-align: center;
                    margin: 0px 15px;
                    list-style-type: none;
                    a{
                        width: 25px;
                        display: flex;
                        img{
                            width: 100%;
                            /* hover放大動畫效果 */
                            transform:scale(1,1);
                            transition: all 0.3s ease-out;
                            &:hover{
                                transform:scale(1.2,1.2);
                            }
                        }
                    }
                }
            }
            img#hamburger_img{
                display:none;
            }
            /* RWD漢堡選單 */
            
            div#header_div_two_two{
                display: none;
                a.hamburger{
                    display: none;
                    width: 46px;
                    align-items: center;
                    text-align: center;
                    margin: 0px 10px;
                }
                div#header_div_two_two{
                    display: none;
                }
            }
    // RWD
    @media all and (max-width: 768px){
        div#header_div_two_two{
            a.hamburger{
                display: flex;
                flex-direction: column;
                span.hamburger_icon{
                    width: 30px;
                    height: 4px;
                    background-color: #515151;
                    border-radius: 4px;
                    margin: 3px 0;
                }
            }
        }
        img#hamburger_img{
            display:block;
            height: 35px;
        }
        ul.header_nav.show{
            height: 100vh;
            display: flex;
            transition: all .3s ease-out;
        }
        ul.header_nav{
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom:0;
            flex-direction: column;
            transform:translateY(calc(100% + 15px));
            background-color: #EFE6E4;
            height: 0px;
            overflow:hidden;
            transition: all .3s ;
            div#header_div_one{
                /* menu轉直 */
                display: flex;
                flex-direction: column;
                margin: 20px;
                margin-top: 0;
                background-color: #EFE6E4;
                li.nav_item{
                    width: 100%;
                    margin: 10px;
                }
            }
        }
        li.nav_item > img{
            width: 18px;
        }
        div#header_div_two{
            display: none;
        }
        div#header_div_two::before{
            display: none;
        }
        div#header_div_two_two{
            margin: 20px;
            margin-right: 0px;
            display: flex;
            li.nav_icon{
                    text-align: center;
                    margin: 0px 15px;
                    list-style-type: none;
                    a{
                        width: 25px;
                        display: flex;
                        img{
                            width: 100%;
                            /* hover放大動畫效果 */
                            transform:scale(1,1);
                            transition: all 0.3s ease-out;
                            &:hover{
                                transform:scale(1.2,1.2);
                            }
                        }
                    }
                }
        }
        div#header_div_two_two::before{
            content:'';
            width: 150px;
            display: flex;
        }
    }
    @media all and (max-width: 576px){
        header.header{
            padding-top: 0;
            padding-bottom: 0;
            a#logo{
                height: 60px;
                display: flex;
                align-items: center;
                padding: 5px 0px;
            }
        }
        div#header_div_two_two{
            li.nav_icon,a.hamburger{
                display: flex;
                text-align: center;
                justify-content: center;
            }
        }
        div#header_div_two_two::before{
                display: none;
        }
    }
</style>