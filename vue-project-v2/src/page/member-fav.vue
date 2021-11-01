<template>
    <div>


    <div id="main-bar-img"></div>

    <!-- header here  -->
    <headercomp></headercomp>

    <div id="main-bar-img"></div>

    <main id="member_fav_page">

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
            <div class="title_h1_container">
                <title_h1 :title="title" class="title_h1"></title_h1>
            </div>

            <div id="folder_area">

                <div class="folder">
                    <div class="folder_title_tag">
                        <span class="folder_title">我的最愛</span>
                        <button class="delete_folder">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="close_icon" />
                        </button>
                    </div>
                    <div class="folder_img_outline">
                        <img src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </div>

                <!-- 排版用重複組件開始 -->
                <div class="folder">
                    <div class="folder_title_tag">
                        <span class="folder_title">我的最愛</span>
                        <button class="delete_folder">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="close_icon" />
                        </button>
                    </div>
                    <div class="folder_img_outline">
                        <img src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </div>
                <div class="folder">
                    <div class="folder_title_tag">
                        <span class="folder_title">我的最愛</span>
                        <button class="delete_folder">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="close_icon" />
                        </button>
                    </div>
                    <div class="folder_img_outline">
                        <img src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </div>
                <div class="folder">
                    <div class="folder_title_tag">
                        <span class="folder_title">我的最愛</span>
                        <button class="delete_folder">
                            <font-awesome-icon icon="fa-solid fa-xmark" class="close_icon" />
                        </button>
                    </div>
                    <div class="folder_img_outline">
                        <img src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </div>
                <!-- 排版用重複組件結束 -->
                

                <!-- 排在最後一個的add_folder按鈕 -->
                <div id="folder_last">
                    <button id="add_folder">
                        <font-awesome-icon icon="fa-solid fa-plus" class="add_icon" />
                    </button>
                </div>

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

    import title_h1 from "../components/title_h1";

    export default {
        components: {
            headercomp,
            footercomp,
            title_h1,
        },
        data(){
            return{
                title: "資料夾分類",
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

#member_fav_page{
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

    #fav_folder{
        text-align: center;
        margin-bottom: 32px;

        .title_h1_container{
            margin: 0 auto;
            padding: 27px 0 48px;
        }

        #folder_area{
            margin: 0 auto 5px;
            display: inline-grid;
            grid-template-columns: auto auto auto;
            grid-auto-rows: auto;
            grid-gap: 70px;
            width: auto;
            
            @media (max-width: 1199.98px){
                grid-template-columns: auto auto;
                margin: 33px 25px 5px;
                grid-gap: 100px;
            }

            @media (max-width: 767.98px){
                grid-template-columns: auto;
                grid-auto-columns: auto;
                grid-auto-flow: column;
                width: 100vw;
                overflow-y: scroll;
                grid-template-areas: "first .";
            }

            .folder{
                width: 290px;
                height: 330px;
                background-color: $palePike;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-bottom: 20px;
                position: relative;
                border-radius: 5px;
                &::before{
                    content: "";
                    width: 110px;
                    height: 40px;
                    display: inline-block;
                    background-color: #EFE6E4;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
                &::after{
                    content: "";
                    display: inline-block;                
                    width: 290px;
                    height: 290px;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    box-shadow: $shadow;
                    border-radius: 5px;
                }

                .folder_title_tag{
                    padding-left: 7px;
                    padding-top: 7px;
                    text-align: left;
                    position: relative;

                    .folder_title{
                        font-size: $h4;
                        line-height: 27px;
                    }

                    .delete_folder{
                        background-color: transparent;
                        width: 20px;
                        height: 20px;
                        padding: 0;
                        font-size: 0;
                        border: 0;
                        outline: 0;
                        cursor: pointer;
                        position: absolute;
                        top: 10px;
                        right: 120px;

                        .close_icon{
                            font-size: 30px;
                            line-height: 20px;
                        }
                        
                    }

                }

                .folder_img_outline{
                    width: 240px;
                    height: 240px;
                    margin: 0 auto;
                    cursor: pointer;
                    overflow: hidden;

                    > img{
                        width: 100%;
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                }

            }

            #folder_last{
                width: 290px;
                height: 330px;
                background-color: transparent;
                // border: 1px solid red;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: 767.98px){
                    grid-area: first;
                }

                #add_folder{
                    width: 100px;
                    height: 100px;
                    background-color: $palePike;
                    border: 0;
                    outline: 0;
                    border-radius: 10px;
                    cursor: pointer;

                    @media (max-width: 767.98px){
                        // margin-left: 100px;
                    }

                    .add_icon{
                        color: $lightPike;
                        font-size: 85px;
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
// 2. 手機版的增加資料夾按鈕要如何顯現？要持續顯現一小塊
// 3. 手機版資料夾下方要加margin，不然陰影會被吃掉

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

</style>