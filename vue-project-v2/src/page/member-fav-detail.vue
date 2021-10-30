<template>
    <div>


    <div id="main-bar-img"></div>

    <!-- header here  -->
    <headercomp></headercomp>

    <main id="member_fav_detail_page">

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
                <div id="member_order" class="member_page_nav_link">
                    <img src="../assets/images/member_shoppingBag.svg" alt="" id="member_order_icon">
                    <span id="member_order_span">訂單查詢</span>
                </div>
                <div id="member_fav" class="member_page_nav_link -on">
                    <img src="../assets/images/member_favorites_hover.svg" alt="" id="member_fav_icon">
                    <span id="member_fav_span">我的最愛</span>
                </div>
            </div>
        </div>
        <!-- 會員頁共用結束 -->

        <section id="fav_folder">

            <!-- h1組件 -->
            <div id="title_h1_outline">
                <div class="title_h1">
                    <span></span>
                    <img src="../assets/images/eggBeater.png" alt="">
                    <h1>我的最愛</h1>
                    <img src="../assets/images/eggBeater.png" alt="">
                </div>
            </div>

            <div id="fav_area">

                <div class="card_outline">
                    <div class="img_container">
                        <img src="../assets/images/cho_cake.jpg">
                    </div>
                    <div class="description_block">
                        <h4 class="cake_title">無敵大蛋糕</h4>
                        <p class="design_idea">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                        <div class="interact_area">
                            <button class="go_shopping">進入商品頁面</button>
                            <div class="delete">
                                <font-awesome-icon icon="fa-solid fa-trash-can" class="trash_can_icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 排版用重複組件開始 -->
                <div class="card_outline">
                    <div class="img_container">
                        <img src="../assets/images/cho_cake.jpg">
                    </div>
                    <div class="description_block">
                        <h4 class="cake_title">無敵大蛋糕</h4>
                        <p class="design_idea">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                        <div class="interact_area">
                            <button class="go_shopping">進入商品頁面</button>
                            <div class="delete">
                                <font-awesome-icon icon="fa-solid fa-trash-can" class="trash_can_icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card_outline">
                    <div class="img_container">
                        <img src="../assets/images/cho_cake.jpg">
                    </div>
                    <div class="description_block">
                        <h4 class="cake_title">無敵大蛋糕</h4>
                        <p class="design_idea">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                        <div class="interact_area">
                            <button class="go_shopping">進入商品頁面</button>
                            <div class="delete">
                                <font-awesome-icon icon="fa-solid fa-trash-can" class="trash_can_icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card_outline">
                    <div class="img_container">
                        <img src="../assets/images/cho_cake.jpg">
                    </div>
                    <div class="description_block">
                        <h4 class="cake_title">無敵大蛋糕</h4>
                        <p class="design_idea">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                        <div class="interact_area">
                            <button class="go_shopping">進入商品頁面</button>
                            <div class="delete">
                                <font-awesome-icon icon="fa-solid fa-trash-can" class="trash_can_icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card_outline">
                    <div class="img_container">
                        <img src="../assets/images/cho_cake.jpg">
                    </div>
                    <div class="description_block">
                        <h4 class="cake_title">無敵大蛋糕</h4>
                        <p class="design_idea">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                        <div class="interact_area">
                            <button class="go_shopping">進入商品頁面</button>
                            <div class="delete">
                                <font-awesome-icon icon="fa-solid fa-trash-can" class="trash_can_icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 排版用重複組件結束 -->

            </div>
            
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

    export default {
        components: {
            headercomp,
            footercomp,
        },
        data(){
            return{};
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

#member_fav_detail_page{
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

    #fav_folder{
        text-align: center;
        margin-bottom: 32px;

        #fav_area{
            margin: 33px 25px 5px;
            display: inline-grid;
            grid-template-columns: auto auto auto;
            grid-auto-rows: auto;
            grid-gap: 70px 50px;
            width: auto;
            
            @media (max-width: 1199.98px){
                grid-template-columns: auto auto;
                margin: 33px 19px 5px;
                grid-gap: 42px 30px;
            }

            @media (max-width: 767.98px){
                grid-template-columns: auto;
                grid-auto-rows: auto;
                grid-auto-flow: row;
                grid-column-gap: 65px;
                margin: 33px 10px 5px;
            }

            .card_outline{
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

                .description_block{
                    
                    .cake_title{
                        margin: 15px 0;
                        text-align: left;
                        font-size: $h4;
                        line-height: 20px;
                        color: #515151;
                        font-weight: 400;
                    }

                    .design_idea{
                        margin: 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        font-size: $p;
                        line-height: 16px;
                        color: #515151;
                    }

                    .interact_area{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;

                        .go_shopping{
                            margin-top: 15px;
                            width: 180px;
                            height: 60px;
                            border-radius: 100px;
                            border: 0;
                            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
                            font-size: $h4;
                            position: relative;
                            color: #515151;
                            cursor: pointer;
                            background-color: #EFE6E4;
                            &:hover{
                                background-color: #F4E9C9;
                            }

                        }

                        .delete{
                            display: inline-block;
                            cursor: pointer;
                            margin-bottom: 3px;

                            .trash_can_icon{
                                font-size: 30px;
                                color: #515151;
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

}

//版面問題
// RWD
// 1. 手機版各元件要縮小
// 2. 手機版.title_h1組件要使用嗎?

// ===== 頁面的scss結束 =====



// ===== 組件title_h1的scss開始 =====
.title_h1 {
    display: inline-block;
    position: relative;
    h1 {
        display: inline-block;
        font-size: 36px;
        color: #515151;
    }
    span {
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background-color: #dfb9b0;
    }
    img {
        width: 58px;
        height: 58px;
        vertical-align: middle;
        position: relative;
        transform: translateY(-10px);
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



// ===== 組件card_voting的scss開始 =====
.card_outline{
    box-sizing: border-box;

    background-color: #DFB9B0;
    width: 350px;
    height: 480px;
    padding: 25px;
    border-radius: 7px;
    .img_container{
        overflow: hidden;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .down_block{
        .cake_title{
            margin: 15px 0;
            text-align: left;
            font-size: 20px;
            line-height: 20px;
            color: #515151;
            font-weight: 400;
        }
        .design_idea{
            margin: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 16px;
            line-height: 16px;
            color: #515151;
        }
        .voting_area{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .voting_num{
                margin-top: 35px;
                .heart_icon{
                    @extend %heart_icon;
                }
                .num{
                    font-size: 20px;
                    vertical-align: top;
                    line-height: 25px;
                    color: #515151;
                }
            }
            .voting{
                margin-top: 15px;
                width: 180px;
                height: 60px;
                border-radius: 100px;
                border: 0;
                box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                font-size: 20px;
                position: relative;
                color: #515151;
                cursor: pointer;
                background-color: #EFE6E4;
                &:hover{
                    background-color: #F4E9C9;
                }
                &:active{
                    span{
                        background-image: url('../assets/images/favorites_icon_h_1.svg');
                    }
                }
                span{
                    @extend %heart_icon;
                    position: absolute;
                    right: 15px;
                    top: 30px;
                    transform: translateY(-50%);
                }
            }
        }
    }
}

// 設定愛心的背景圖
%heart_icon{
    background-image: url('../assets/images/favorites_icon_1.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    display: inline-block;
    height: 22px;
    width: 22px;
}
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
// ===== 組件card_voting的scss結束 =====

</style>