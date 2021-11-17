<template>
    <div>
        

    <div id="main-bar-img"></div>

    <!-- header here  -->
    <headercomp></headercomp>

    <main id="member_data_page">

        <!-- 會員頁共用main_bar組件 -->
        <member_main_bar :page="page"></member_main_bar>
        
        <section id="member_name_block">
            <form action="" method="post">
                <div id="member_name">
                    <span>姓名: </span>
                    <input type="text" name="member_name" class="data-input" v-model="userName">
                    <span class="data_input_span">{{userName}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
                <div id="member_nickname">
                    <span>暱稱: </span>
                    <input type="text" name="member_nickname" class="data-input" v-model="userNickname">
                    <span class="data_input_span">{{userNickname}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
                <div id="member_birthday">
                    <span>生日: </span>
                    <input type="text" name="member_birthday_year" class="data-input" v-model="userBirthdayYear">
                    <input type="text" name="member_birthday_month" class="data-input" v-model="userBirthdayMonth">
                    <input type="text" name="member_birthday_date" class="data-input" v-model="userBirthdayDate">
                    <span id="data_input_span">{{userBirthday}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
            </form>
        </section>

        <section id="member_data_block">
            <form action="" method="post">
                <div id="member_email">
                    <span>E-mail: </span>
                    <input type="email" name="member_email" class="data-input" v-model="userEmail">
                    <span class="data_input_span">{{userEmail}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
                <div id="member_address">
                    <span>地址:&nbsp;</span>
                    <input type="text" name="member_address" class="data-input" v-model="userAddress">
                    <span class="data_input_span">{{userAddress}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
                <div id="member_phone">
                    <span>電話:&nbsp;</span>
                    <input type="text" name="member_phone" class="data-input" v-model="userPhone">
                    <span class="data_input_span">{{userPhone}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
                <div id="member_password">
                    <span>密碼:&nbsp;</span>
                    <input type="text" name="member_password" class="data-input" v-model="userPassword">
                    <span class="data_input_span">{{userPassword}}</span>
                    <img src="../assets/images/pen_icon.svg" alt="">
                </div>
            </form>
        </section>

        <section id="cake_design">

            <!-- h1組件 -->
            <div class="title_h1_container_design">
                <title_h1 :title="titleDesign" class="title_h1"></title_h1>
            </div>

            <div id="cake_design_cards">

                <div class="card_outline">
                    <div class="img_container">
                        <img src="../assets/images/cho_cake.jpg">
                    </div>
                    <div class="description_block">
                        <h4 class="cake_title">無敵大蛋糕</h4>
                        <p class="design_idea">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</p>
                        <div class="status_area">
                            <div class="verify">
                               <font-awesome-icon icon="fa-solid fa-circle" class="status_ball"/>
                                <span class="status_text">人氣投票審核通過</span>
                            </div>
                            <button class="checking">
                                查看
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="scope_icon" />
                            </button>
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
                        <div class="status_area">
                            <div class="verify">
                                <font-awesome-icon icon="fa-solid fa-circle" class="status_ball"/>
                                <span class="status_text">人氣投票審核通過</span>
                            </div>
                            <button class="checking">
                                查看
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="scope_icon" />
                            </button>
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
                        <div class="status_area">
                            <div class="verify">
                                <font-awesome-icon icon="fa-solid fa-circle" class="status_ball"/>
                                <span class="status_text">人氣投票審核通過</span>
                            </div>
                            <button class="checking">
                                查看
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="scope_icon" />
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 排版用重複組件結束 -->

            </div>

            <div id="view_all_design_area">
                <button id="view_all_design_button">查看全部</button>
            </div>

        </section>

        <section id="coupon_block">

            <!-- h1組件 -->
            <div class="title_h1_container_coupon">
                <title_h1 :title="titleCoupon" class="title_h1"></title_h1>
            </div>

            <div id="coupon_area">

                <div class="coupon">
                    <div class="coupon_left_block">
                        <div class="discount_amout">$<span>150</span></div>
                        <div class="A_cake_text_logo">
                            <img src="http://via.placeholder.com/60x22" alt="">
                        </div>
                        <div class="coupon_left_decoration_img">
                            <img src="http://via.placeholder.com/40x0" alt="">
                        </div>
                        <div class="use_threshold">消費滿<span>1000</span>即可折抵</div>
                        <img class="bottom_decoration_img" src="../assets/images/snowRWD.svg">
                    </div>
                    <div class="coupon_right_block">
                        <div class="expiration">
                            <span>使用期限</span>
                            <span class="expiration_date">2021/10/31</span>
                        </div>
                        <div class="coupon_right_decoration_img">
                            <img src="http://via.placeholder.com/39x39" alt="">
                        </div>
                        <div class="expiration_countdown">
                            即將失效：剩下<span>10</span>天
                        </div>
                    </div>
                </div>

                <!-- 排版用重複組件開始 -->
                <div class="coupon">
                    <div class="coupon_left_block">
                        <div class="discount_amout">$<span>150</span></div>
                        <div class="A_cake_text_logo">
                            <img src="http://via.placeholder.com/60x22" alt="">
                        </div>
                        <div class="coupon_left_decoration_img">
                            <img src="http://via.placeholder.com/40x0" alt="">
                        </div>
                        <div class="use_threshold">消費滿<span>1000</span>即可折抵</div>
                        <img class="bottom_decoration_img" src="../assets/images/snowRWD.svg">
                    </div>
                    <div class="coupon_right_block">
                        <div class="expiration">
                            <span>使用期限</span>
                            <span class="expiration_date">2021/10/31</span>
                        </div>
                        <div class="coupon_right_decoration_img">
                            <img src="http://via.placeholder.com/39x39" alt="">
                        </div>
                        <div class="expiration_countdown">
                            即將失效：剩下<span>10</span>天
                        </div>
                    </div>
                </div>
                <div class="coupon">
                    <div class="coupon_left_block">
                        <div class="discount_amout">$<span>150</span></div>
                        <div class="A_cake_text_logo">
                            <img src="http://via.placeholder.com/60x22" alt="">
                        </div>
                        <div class="coupon_left_decoration_img">
                            <img src="http://via.placeholder.com/40x0" alt="">
                        </div>
                        <div class="use_threshold">消費滿<span>1000</span>即可折抵</div>
                        <img class="bottom_decoration_img" src="../assets/images/snowRWD.svg">
                    </div>
                    <div class="coupon_right_block">
                        <div class="expiration">
                            <span>使用期限</span>
                            <span class="expiration_date">2021/10/31</span>
                        </div>
                        <div class="coupon_right_decoration_img">
                            <img src="http://via.placeholder.com/39x39" alt="">
                        </div>
                        <div class="expiration_countdown">
                            即將失效：剩下<span>10</span>天
                        </div>
                    </div>
                </div>
                <!-- 排版用重複組件結束 -->

            </div>

            <button id="view_all_coupon">
                <font-awesome-icon icon="fa-solid fa-angles-down" id="arrow_down_icon" />
            </button>

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
    import axios from 'axios';

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
                page: "data",
                // 會員資料
                userName: "王大涵",
                userNickname: "王小涵",
                userBirthdayYear: "88",
                userBirthdayMonth: "06",
                userBirthdayDate: "12",
                userEmail: "mmm@gmail.com",
                userAddress: "台北市中山區南京東路三段219號4-5F",
                userPhone: "0912234456",
                userPassword: "******336",
                // 折價券資料
                titleDesign: "蛋糕庫設計",
                titleCoupon: "折價券",
            };
        },
        computed: {
            userBirthday(){
                return this.userBirthdayYear + "/" + this.userBirthdayMonth + "/" + this.userBirthdayDate;
            },
        },
        mounted(){
            // axios.get("http://tfd103g2.sexfat.tw/test_echo.php").then(res => console.log(res));
            // 會員認證，非會員跳轉到登入頁面
            if(this.$store.state.member_id==0){
                alert("您尚未登入，將跳轉到登入頁面");
                this.$router.push('/assign')
            }
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

#member_data_page{
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;

    #member_name_block{
        width: 535px;
        font-size: 0px;
        margin: 40px auto 70px;
        color: $darkGrey;

        @media (max-width: 575.98px){
            margin: 20px auto 30px;
        }

        > form{
            display: flex;
            justify-content: space-between;

            @media (max-width: 575.98px){
                flex-direction: column;
                align-items: center;
                height: 120px;
            }

            span{
                font-size: $h4;
            }

            .data-input{
                border: 1px solid #515151;
                outline: none;
                font-size: $h4;

                display: none;
            }

            img{
                width: 20px;
                height: 20px;
                position: relative;
                top: 2.5px;
                cursor: pointer;
                margin-left: 7px;
            }

        }

    }

    #member_data_block{
        width: 93%;
        height: 250px;
        margin: 0 auto;
        padding-left: 100px;
        background-color: #F7EDD4;
        color: $darkGrey;
        border-radius: 5px;

        @media (max-width: 767.98px){
            padding-left: 50px;
        }

        @media (max-width: 575.98px){
            padding: 0 25px;
        }

        > form{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            > div{
                padding: 10px 0;

                span{
                    font-size: $h4;
                }

                img{
                    width: 20px;
                    height: 20px;
                    position: relative;
                    top: 2.5px;
                    cursor: pointer;
                }

                .data-input{
                    border: 1px solid #515151;
                    outline: none;
                    font-size: $h4;

                    display: none;
                }

            }

        }

    }

    #cake_design{
        text-align: center;
        padding: 0 40px;

        @media (max-width: 575.98px){
            padding: 0;
        }

        .title_h1_container_design{
            margin: 0 auto;
            padding: 45px 0 50px;
        }

        #cake_design_cards{
            text-align: left;
            display: flex;
            justify-content: space-between;

            @media (max-width: 1199.98px){
                width: 100vw;
                overflow-y: scroll;
                padding: 0 30px 10px;
            }

            .card_outline{
                box-shadow: $shadow;

                @media (max-width: 575.98px){
                    margin: 0 17.5px;
                }

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

                    .status_area{
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;

                        .verify{
                            margin-top: 35px;
                            color: #5A9308;
                            font-size: 0px;

                            .status_ball{
                                vertical-align: middle;
                                font-size: $p;
                                margin-right: 3px;
                            }

                            .status_text{
                                font-size: 12px;
                                vertical-align: middle;
                            }

                        }

                        .checking{
                            margin-top: 15px;
                            width: 180px;
                            height: 60px;
                            border-radius: 30px;
                            border: 0;
                            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
                            font-size: $h4;
                            position: relative;
                            color: $darkGrey;
                            cursor: pointer;
                            background-color: $lightPike;
                            &:hover{
                                background-color: $lightYellow;
                            }

                            .scope_icon{
                                position: absolute;
                                right: 15px;
                                top: 30px;
                                transform: translateY(-50%);
                            }

                        }

                    }

                }
            
            }

        }

        #view_all_design_area{

            @media (max-width: 575.98px){
                height: 75px;
            }

            #view_all_design_button{
                width: 180px;
                height: 60px;
                background-color: $darkGrey;
                color: #FFFFFF;
                border: 0;
                outline: none;
                cursor: pointer;
                border-radius: 5px;
                margin: 50px 0;
                font-size: $h3;
                box-shadow: $shadow;
                &:hover{
                    background-color: $lightYellow;
                    color: $darkGrey;
                }

                @media (max-width: 575.98px){
                    display: none;
                }
                
            }
        }

    }

    #coupon_block{
        margin: 0 40px 32px;
        background-color: $palePike;
        border-radius: 5px;
        text-align: center;

        @media (max-width: 474.98px){
            margin: 0 15px 32px;
        }

        .title_h1_container_coupon{
            margin: 0 auto;
            padding: 12px 0 15px;
        }

        #coupon_area{
            display: grid;
            grid-template-columns: auto auto;
            grid-auto-rows: auto;
            grid-row-gap: 40px;
            grid-column-gap: 30px;
            justify-items: center;
            padding: 0 40px;

            @media (max-width: 1029.98px){
                grid-template-columns: auto;
            }

            @media (max-width: 575.98px){
                grid-template-columns: 100%;
                grid-auto-rows: 112.5px;
                grid-row-gap: 25px;
            }

            @media (max-width: 474.98px){
                padding: 0 15px;
            }

            .coupon{
                display: inline-flex;

                .coupon_left_block{
                    width: 300px;
                    height: 150px;
                    background-color: #F0D5CE;
                    position: relative;
                    border-right: 1px solid $palePike;
                    border-top-left-radius: 5px;

                    .discount_amout{
                        font-size: 50px;
                        line-height: 56px;
                        position: absolute;
                        top: 19px;
                        left: 27px;
                        color: #515151;
                    }

                    .A_cake_text_logo{
                        width: 60px;
                        height: 22px;
                        position: absolute;
                        top: 33px;
                        right: 34px;
                        overflow: hidden;

                        // border: 1px solid blue;

                        > img{
                            width: 100%;
                        }

                        > span{
                            font-size: 5px;
                            line-height: 4px;
                            color: #515151
                        }

                    }

                    .coupon_left_decoration_img{
                        // 此處樣式未確定
                        position: absolute;
                        left: 27px;
                        bottom: 20px;
                    }

                    .use_threshold{
                        font-size: $p;
                        color: #515151;
                        position: absolute;
                        bottom: 30px;
                        right: 34px;
                    }

                    .bottom_decoration_img{
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        transform: rotate(180deg);
                    }

                    > svg{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        transform: rotate(180deg);
                    }

                }

                .coupon_right_block{
                    background-color: #F7EDD4;
                    position: relative;
                    width: 120px;
                    height: 150px;
                    border-bottom-right-radius: 5px;

                    &::after{
                        content: "";
                        display: inline-block;
                        width: 42px;
                        height: 42px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-image: linear-gradient(45deg, #EFDCAC 50%, $palePike 50%);
                        border-bottom-left-radius: 5px;
                    }

                    .expiration{
                        width: 80px;
                        height: 31px;
                        position: absolute;
                        top: 30px;
                        left: 20px;
                        display: flex;
                        flex-direction: column;

                        > span:first-child{
                            align-self: flex-start;
                            font-size: 12px;
                            transform: scale(0.83);
                            transform-origin:center left;
                            line-height: 14px;
                            color: #515151;
                            margin-bottom: 3px;
                        }

                        .expiration_date{
                            align-self: flex-end;
                            font-size: 12px;
                            line-height: 14px;
                            color: #515151;
                        }

                    }

                    .coupon_right_decoration_img{
                        position: absolute;
                        top: 65px;
                        left: 10px;
                        width: 39px;
                        height: 39px;
                        overflow: hidden;

                        > img{
                            width: 100%;
                        }

                    }

                    .expiration_countdown{
                        color: #E8542E;
                        font-size: 12px;
                        white-space: nowrap;
                        transform: scale(.6);
                        transform-origin:center left;
                        position: absolute;
                        line-height: 10px;
                        left: 28px;
                        bottom: 32px;
                    }

                }

                @media (min-width: 1029.98px){
                // 排版上一列有兩個時用的設定
                    &:nth-child(2n){
                        justify-self: start;
                    }

                    &:nth-child(2n + 1){
                        justify-self: end;
                    }
                }

                @media (max-width: 575.98px){
                    // 手機版
                    transform-origin: center top;
                    transform: scale(.75);
                }

            }

        }

        #view_all_coupon{
            display: inline-block;
            width: 40px;
            height: 36px;
            background-color: transparent;
            padding: 0;
            border: 0;
            outline: none;
            font-size: 0;
            text-align: center;
            cursor: pointer;
            margin: 15px 0 20px;

            #arrow_down_icon{
                display: inline-block;
                font-size: 34px;
                line-height: 3px;
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

//
// 折價券左下圖案樣式未定

// ===== 頁面的scss結束 =====



// ===== 組件card_voting的scss開始 =====
.card_outline{
    box-sizing: border-box;

    background-color: #DFB9B0;
    width: 350px;
    height: 480px;
    padding: 25px;
    border-radius: 5px;
    box-shadow: $shadow;

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