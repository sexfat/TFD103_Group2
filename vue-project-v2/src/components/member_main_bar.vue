<template>
    <div class="main_bar">
            <div id="avatar_container">
                <img src="../assets/images/aboutus_logo.png" alt="會員大頭照">
            </div>
            <div id="member_page_nav">

                <router-link to="/member_data">
                    <div id="member_data" class="member_page_nav_link" :class="{'-on':page === 'data'}">
                        <img src="../assets/images/member_member_hover.svg" alt="" id="member_data_icon" v-if="page === 'data'">
                        <img src="../assets/images/member_member.svg" alt="" id="member_data_icon" v-else>
                        <span id="member_data_span">會員資料</span>
                    </div>
                </router-link>

                <router-link to="/member_order">
                    <div id="member_order" class="member_page_nav_link" :class="{'-on':page === 'order'}">
                        <img src="../assets/images/member_shoppingBag_hover.svg" alt="" id="member_order_icon" v-if="page === 'order'">
                        <img src="../assets/images/member_shoppingBag.svg" alt="" id="member_order_icon" v-else>
                        <span id="member_order_span">訂單查詢</span>
                    </div>
                </router-link>

                <router-link to="/member_fav">
                    <div id="member_fav" class="member_page_nav_link" :class="{'-on':page === 'fav'}">
                        <img src="../assets/images/member_favorites_hover.svg" alt="" id="member_fav_icon" v-if="page === 'fav'">
                        <img src="../assets/images/member_favorites.svg" alt="" id="member_fav_icon" v-else>
                        <span id="member_fav_span">我的最愛</span>
                    </div>
                </router-link>

            </div>
        </div>
</template>


<script>
export default {
    name: "member_main_bar",
    props: ["page"],
    computed: {
        
    },

}
</script>


<style lang="scss" scoped>

@import "../assets/style/var.scss";

    a{
        text-decoration: none;
    }

  .main_bar{
        height: 500px;
        padding-top: 150px;
        
        #avatar_container{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0px auto 50px;

            > img{      // 測試用的樣式
                z-index: 100;
                width: 150px;
                position: relative;
                right: 30px;
                top: 15px;
            }

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

             @media (max-width: 409.98px){
                width: 375px;
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
</style>