<template>
    <div>


    <div id="main-bar-img"></div>

    <!-- header here  -->
    <headercomp></headercomp>

    <div id="main-bar-img"></div>

    <main id="member_fav_page">

        <!-- 會員頁共用main_bar組件 -->
        <member_main_bar :page="page"></member_main_bar>

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
                        <router-link to="/member_fav_detail">
                            <img src="../assets/images/cho_cake.jpg" alt="">
                        </router-link>
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
                        <router-link to="/member_data">
                            <img src="../assets/images/cho_cake.jpg" alt="">
                        </router-link>
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
                        <router-link to="./member_fav_detail">
                            <img src="../assets/images/cho_cake.jpg" alt="">
                        </router-link>
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
                        <router-link to="./member_fav_detail">
                            <img src="../assets/images/cho_cake.jpg" alt="">
                        </router-link>
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

    import member_main_bar from "../components/member_main_bar";
    import title_h1 from "../components/title_h1";

    export default {
        components: {
            headercomp,
            footercomp,
            member_main_bar,
            title_h1,
        },
        data(){
            return{
                page: "fav",
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

    #fav_folder{
        text-align: center;
        margin-bottom: 32px;
        padding: 0 40px;

        @media (max-width: 767.98px){
            padding: 0;
        }

        .title_h1_container{
            margin: 0 auto;
            padding: 27px 0 48px;
        }

        #folder_area{
            margin: 0 auto 5px;
            display: grid;
            grid-template-columns: auto auto auto;
            grid-auto-rows: auto;
            // grid-gap: 75px;
            grid-row-gap: 65px;
            justify-items: center;
            
            @media (max-width: 1199.98px){
                grid-template-columns: auto auto;
                // grid-gap: 100px;
                grid-row-gap: 65px;
            }

            @media (max-width: 767.98px){
                grid-template-columns: auto;
                grid-auto-columns: auto;
                grid-auto-flow: column;
                width: 100vw;
                overflow-y: scroll;
                grid-template-areas: "first .";
                padding: 0 30px 10px;
                margin: 33px 0 5px;
                grid-gap: 70px;
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

                    > a{
                        display: block;

                        > img{
                            width: 100%;
                            // position: relative;
                            // top: 50%;
                            // transform: translateY(-50%);
                        }

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
// 手機版的增加資料夾按鈕要持續顯現一小塊

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