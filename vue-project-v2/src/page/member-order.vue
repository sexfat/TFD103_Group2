<template>
    <div>


    <div id="main-bar-img"></div>

    <!-- header here  -->
    <headercomp></headercomp>

    <main id="member_order_page">

        <!-- 會員頁共用開始 -->
        <div class="main_bar">
            <div id="avatar_container">
                <img src="http://via.placeholder.com/100x100" alt="會員大頭照">
            </div>
            <div id="member_page_nav">
                <div id="member_data" class="member_page_nav_link">
                    <img src="../assets/images/member_member.svg" alt="" id="member_data_icon" >
                    <span id="member_data_span">會員資料</span>
                </div>
                <div id="member_order" class="member_page_nav_link -on">
                    <img src="../assets/images/member_shoppingBag_hover.svg" alt="" id="member_order_icon">
                    <span id="member_order_span">訂單查詢</span>
                </div>
                <div id="member_fav" class="member_page_nav_link">
                    <img src="../assets/images/member_favorites.svg" alt="" id="member_fav_icon">
                    <span id="member_fav_span">我的最愛</span>
                </div>
            </div>
        </div>
        <!-- 會員頁共用結束 -->

        <section id="title_h1_block">
            <!-- h1組件 -->
            <div class="title_h1_container">
                <title_h1 :title="title" class="title_h1"></title_h1>
            </div>
        </section>

        <section id="switch_tab_block">
            <!-- 等組件 -->
        </section>

        <section id="filter_block">
            <form action="" method="post">
                <div id="select_block">
                    <select name="year" id="year" class="choose_date">
                        <option value="" disabled selected>年份</option>
                        <option value="1">2021</option>
                        <option value="2">2020</option>
                    </select>
                    <select name="month" id="month" class="choose_date">
                        <option value="" disabled selected>月份</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <!-- searchbar組件 -->
                <input type="text" placeholder="搜尋..." class="search">
            </form>
        </section>

        <section id="order_block">

            <div class="order">
                <div class="order_title">
                    <div class="title_main">
                        <div class="order_number">TG180605N00565</div>
                        <div class="order_status">
                            已完成
                        </div>
                        <div class="order_date">
                            訂購日期:
                            <span>110/09/03</span>
                        </div>
                    </div>
                    <button class="unfold_order">
                        <!-- <font-awesome-icon icon="fa-solid fa-plus" class="plus_icon" /> -->
                        <font-awesome-icon icon="fa-solid fa-minus" class="minus_icon" />
                    </button>
                </div>
                <div class="order_detail">
                    <div class="order_item">
                        <div class="product_image">
                            <img src="../assets/images/cho_cake.jpg">
                        </div>
                        <div class="product_description_block">
                            <div class="product_title">巧克力大蛋糕</div>
                            <div class="product_description">超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕</div>
                        </div>
                        <div class="item_number"><span>1</span>個</div>
                        <div class="item_total">$<span>180</span></div>
                    </div>
                    <!-- 重複排版用組件開始 -->
                    <div class="order_item">
                        <div class="product_image">
                            <img src="../assets/images/cho_cake.jpg">
                        </div>
                        <div class="product_description_block">
                            <div class="product_title">巧克力大蛋糕</div>
                            <div class="product_description">超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕</div>
                        </div>
                        <div class="item_number"><span>1</span>個</div>
                        <div class="item_total">$<span>180</span></div>
                    </div>
                    <div class="order_item">
                        <div class="product_image">
                            <img src="../assets/images/cho_cake.jpg">
                        </div>
                        <div class="product_description_block">
                            <div class="product_title">巧克力大蛋糕</div>
                            <div class="product_description">超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕超級好吃的巧克力蛋糕</div>
                        </div>
                        <div class="item_number"><span>1</span>個</div>
                        <div class="item_total">$<span>180</span></div>
                    </div>
                    <!-- 重複排版用組件結束 -->
                    <div class="information_block">
                        <div class="information_left">
                            <div class="payment_method">
                                付款方式:
                                <span>超商取貨付款</span>
                            </div>
                            <div class="pickup_store">
                                配送門市:
                                <span>緯育門市</span>
                            </div>
                        </div>
                        <div class="information_right">
                            <div class="deliver_fee">
                                運費: $
                                <span>60</span>
                            </div>
                            <div class="discount">
                                折扣: $
                                <span>100</span>
                            </div>
                            <div class="order_total">
                                總計: $
                                <span>580</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 重複排版用組件開始 -->
            <div class="order">
                <div class="order_title">
                    <div class="title_main">
                        <div class="order_number">TG180605N00565</div>
                        <div class="order_status">
                            已完成
                        </div>
                        <div class="order_date">
                            訂購日期:
                            <span>110/09/03</span>
                        </div>
                    </div>
                    <button class="unfold_order">
                        <font-awesome-icon icon="fa-solid fa-plus" class="plus_icon" />
                        <!-- <font-awesome-icon icon="fa-solid fa-minus" class="minus_icon" /> -->
                    </button>
                </div>
            </div>
            <div class="order">
                <div class="order_title">
                    <div class="title_main">
                        <div class="order_number">TG180605N00565</div>
                        <div class="order_status">
                            已完成
                        </div>
                        <div class="order_date">
                            訂購日期:
                            <span>110/09/03</span>
                        </div>
                    </div>
                    <button class="unfold_order">
                        <font-awesome-icon icon="fa-solid fa-plus" class="plus_icon" />
                        <!-- <font-awesome-icon icon="fa-solid fa-minus" class="minus_icon" /> -->
                    </button>
                </div>
            </div>
            <!-- 重複排版用組件結束 -->
            
        </section>

        <div id="bottom_snow_img">
            <img src="../assets/images/snowRWD.svg">
        </div>
        
    </main>

    <!-- footer here -->
    <footercomp></footercomp>

    </div>
</template>


<script>
    import headercomp from "../components/headercom";
    import footercomp from "../components/footercom";
    
    import title_h1 from "../components/title_h1";

    export default {
        components: {
            headercomp,
            footercomp,
            title_h1,
        },
        data(){
            return{
                title: "我的訂單",
            };
        },
    }
</script>


<style  scoped lang="scss">
@import "../assets/style/var.scss";


// ===== 頁面的scss開始 =====
#main-bar-img{
    height: 500px;
    background-image: url("../assets/images/background_img500.png");
    background-size: auto 100%;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

#member_order_page{
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    font-size: 0;

    .main_bar{
        height: 500px;
        padding-top: 150px;
        
        #avatar_container{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0px auto 50px;
        }
        #member_page_nav{
            // border: 1px solid blue;

            display: flex;
            justify-content: space-between;
            width: 410px;
            margin: 0 auto 110px;

            @media (max-width: 575.98px){
                transform: scale(0.8);
            }

            .member_page_nav_link{
                // border: 1px solid green;

                width: 82px;
                height: 92px;
                display: inline-flex;
                flex-direction: column;
                align-items: center;

                > img{
                    width: 50px;
                    height: 50px;
                    margin-bottom: 10px;
                    cursor: pointer;
                }

                > span{
                    width: 82px;
                    height: 32px;
                    background-color: #FFFFFF;
                    border-radius: 15px;
                    text-align: center;
                    font-size: $p;
                    line-height: 32px;
                    color: #9F746B;
                    cursor: pointer;
                }
            }
            .member_page_nav_link.-on{
                > span{
                    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
                }
            }
        }
    }

    #title_h1_block{
        text-align: center;
        .title_h1_container{
            margin: 0 auto;
            padding: 27px 0 50px;
        }
    }

    #switch_tab_block{  // 佔位用的樣式大小
        height: 50px;
        margin: 0 auto 55px;
    }
    
    #filter_block{
        margin: 0 40px 70px;

        > form{
        display: flex;
        justify-content: space-between;

            #select_block{
                display: inline-flex;
                justify-content: space-between;
                padding-top: 5px;

                .choose_date{
                    width: 260px;
                    height: 40px;
                    text-align: center;
                    font-size: $h4;
                    vertical-align: top;

                    &:nth-child(1){
                        margin-right: 40px;
                    }

                }

                input.search{
                    display: inline-block;
                    vertical-align: top;
                }

            }

        }
        
    }

    #order_block{
        display: flex;
        flex-direction: column;
        width: 93%;
        margin: 0 auto;
        
        .order{
            margin-bottom: 50px;

            .order_title{
                background-color: $palePike;
                height: 140px;
                display: flex;
                justify-content: space-between;
                align-content: center;

                .title_main{
                    align-self: center;
                    display: flex;
                    position: relative;

                    .order_number{
                        font-size: $h2;
                        color: $darkGrey;
                        margin-left: 45px;
                    }

                    .order_status{
                        font-size: $h2;
                        color: $darkGrey;
                        margin-left: 40px;
                    }

                    .order_date{
                        font-size: 12px;
                        color: #848484;
                        position: absolute;
                        line-height: 16px;
                        left: 45px;
                        bottom: -17px;
                    }

                }

                .unfold_order{
                    width: 40px;
                    height: 40px;
                    border: 0;
                    outline: none;
                    padding: 0;
                    background-color: transparent;
                    cursor: pointer;
                    align-self: center;
                    margin-right: 50px;

                    .plus_icon, .minus_icon{
                        font-size: 40px;
                        line-height: 38px;
                    }
                    
                }
                
            }

            .order_detail{
                background-color: #F7F2F1;
                display: flex;
                flex-direction: column;

                .order_item{
                    margin: 50px 45px 0;
                    display: flex;
                    flex-wrap: nowrap;

                    .product_image{
                        width: 100px;
                        height: 100px;
                        overflow: hidden;
                        margin-right: 45px;
                        flex-shrink: 0;

                        > img{
                            width: 100%;
                            height: 100%;
                        }

                    }

                    .product_description_block{
                        font-size: $p;
                        color: #979797;
                        width: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding-right: 100px;
                    }

                    .item_number{
                        font-size: $p;
                        color: #979797;
                        align-self: center;
                        width: 135px;
                        text-align: right;
                        flex-shrink: 0;
                    }

                    .item_total{
                        font-size: $p;
                        color: #979797;
                        align-self: center;
                        width: 135px;
                        text-align: right;
                        flex-shrink: 0;
                    }

                }

                .information_block{
                    margin: 50px 45px 0;
                    display: flex;
                    justify-content: space-between;
                    font-size: $h2;
                    color: $darkGrey;

                    .information_left{

                        .payment_method{
                            line-height: 37px;
                            margin-bottom: 15px;
                        }

                        .pickup_store{
                            line-height: 37px;
                            margin-bottom: 15px;
                        }

                    }

                    .information_right{

                        .deliver_fee{
                            line-height: 37px;
                            margin-bottom: 15px;
                        }

                        .discount{
                            line-height: 37px;
                            margin-bottom: 15px;
                        }

                        .order_total{
                            line-height: 37px;
                            margin-bottom: 27px;
                        }

                    }

                }

            }

        }

    }

}

#bottom_snow_img{
    display: block;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: rotate(180deg) translateX(50%);
    overflow: hidden;

    > img{
        min-width: 1200px;
    }

}

//版面問題
// 1. 下拉選單預設選項的設置方式需要優化
// 2. 下拉選單的樣式要再調整
// 3. 下拉選單的寬高設定在safari似乎不起作用
// 4. 金額計算個位數要對齊

// ===== 頁面的scss結束 =====



// ===== 組件title_h1的scss開始 =====
.title_h1 {
    display: inline-block;
    position: relative;
    .outline{
        display:flex;
    }
    h1 {
        display: inline-block;
        margin:0;
        font-size: 36px;
        color: #515151;
    }
    span {
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background-color: #dfb9b0;
    }
    img {
        max-width: 58px;
        max-height: 58px;
        width:100%;
        height:100%;
        // vertical-align: middle;
        // position: relative;
        // transform: translateY(-10px);
    }
}
@media (max-width:576px){
    .title_h1 h1{
        font-size:24px;
        position:relative;
        line-height:48px;
    }
}
// ===== 組件title_h1的scss結束 =====


// ===== 組件searchbar的scss開始 =====
input.search{
    width:400px;
    max-width:100%;
    height:50px;
    border-radius: 100px;
    border:none;
    padding:0 30px;
    opacity:70%;
    box-shadow: $shadow;
    font-size: 20px;
    cursor: text;
    &:focus{
        border:none;
    }
}
// ===== 組件searchbar的scss結束 =====

</style>