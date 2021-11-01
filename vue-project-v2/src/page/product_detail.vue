<template>
    <div>
        <headercom></headercom>
        <main id="product_details">
            <section id="product_details_combination1">
                <div id="cake_information"> 
                    <div id="cake_img_outline"> 
                        <img class="cake_img" src="../assets/images/cho_cake.jpg" alt="">
                            <img id="change_cake" src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                    <div id="cake_details">
                        <div class="cake_titlebar_content">
                            <div id="cake_titlebar">
                                <div id="cake_title">巧克力蛋糕<img class="cake_detail_img" src="../assets/images/love_icon.svg" alt=""></div>
                                <div id="cake_clear">
                                    <button id="">清空選項</button>
                                </div>
                            </div>
                            <div id="cake_content">文字文字文字文字文字文字文字文文字文字
                                文字文字文字文字文字文字文字文文字文字文字文字文字文字文字
                                文字文字文字文字文字文字文字文文字文字文字文字文字文字文字
                                文字文字文文字文文字文字文文字文字文字文字文字文字文字
                            </div>
                        </div>
                        <div id="cake_size_quantity">
                            <form id='cake_quantity' method='POST' action='#'>
                                <input type='button' value='-' class='qtyminus' field='quantity' />
                                <input type='text' name='quantity' value='數量' class='qty' disabled/>
                                <input type='button' value='+' class='qtyplus' field='quantity'/>
                            </form>
                            <div id="cake_size">
                                <label for="">
                                    <select>
                                        <option>6吋</option>
                                        <option>8吋</option>
                                        <option>10吋</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="addenda_titlebar">
                            <div class="addenda_title">包裝
                                <div class="addenda_cancel_icon">
                                    <img src="" alt="">
                                </div>
                            </div>
                            
                            <div class="addenda_detail_item">
                                <div id="addenda_detail">
                                    <div class="addenda_img">
                                        <img src="../assets/images/cho_cake.jpg" alt="">   
                                    </div>
                                    <div class="addenda_describe">這只是一班包裝</div>
                                </div>
                                <div class="addenda_detail_outline">
                                    <div class="addenda_amount">
                                        <label for="">
                                            <select>
                                                <option>普通包裝</option>
                                                <option>特殊包裝</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="addenda_twandprice">
                                        
                                        <div class="addenda_price_tw">NT$</div>
                                        <div class="addenda_price">0</div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    <!-- <span></span> -->
                    <div class="addenda_block">
                        <div class="addenda_titlebar">
                            <div class="addenda_title">卡片
                                <div class="addenda_cancel_icon">
                                    <img src="" alt="">
                                </div>
                            </div>
                            
                            <div class="addenda_detail_item">
                                <div id="addenda_detail">
                                    <div class="addenda_img">
                                        <img src="../assets/images/cho_cake.jpg" alt="">   
                                    </div>
                                    <div class="addenda_describe">這只是一班的卡片卡片卡片卡片</div>
                                </div>
                                <div class="addenda_detail_outline">
                                    <div class="addenda_amount">
                                        <label for="">
                                            <select>
                                                <option>一般卡片</option>
                                                <option>情人節卡片</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="addenda_twandprice">
                                        
                                        <div class="addenda_price_tw">NT$</div>
                                        <div class="addenda_price">0</div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                            <!-- <span></span> -->
                        <div class="addenda_titlebar">
                            <div class="addenda_title">蠟燭
                                <div class="addenda_cancel_icon">
                                    <img src="" alt="">
                                </div>
                            </div>
                            
                            <div class="addenda_detail_item">
                                <div id="addenda_detail">
                                    <div class="addenda_img">
                                        <img src="../assets/images/cho_cake.jpg" alt="">   
                                    </div>
                                    <div class="addenda_describe">一根小蠟燭一根小蠟燭一根小蠟燭一根小蠟燭一根小蠟燭</div>
                                </div>
                                <div class="addenda_detail_outline">
                                    <div class="addenda_amount">
                                        <label for="">
                                            <select>
                                                <option>一根蠟燭</option>
                                                <option>造型蠟燭:數字0</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="addenda_twandprice">
                                        <div class="addenda_price_tw">NT$</div>
                                        <div class="addenda_price">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="addnew_product_hr"></span>
                        <div class="new_addenda_titlebar">
                            <div class="new_addenda">
                                <div class="new_addenda_title">新增加購</div>
                                <img src="../assets/images/cho_cake.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <button id="product_details_combination1_commit">確認</button>
                </section>
                <section id="product_details_combination2">
                    <div class="new_combination">
                        <div class="new_combination_title">新增組合</div>
                        <img src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </section>
                <section id="product_details_combination3">
                    <div id="product_details_total">
                        <div id="combination_titlebar">
                            <div id="combination_title">組合一</div>
                        </div>
                        <div class="combination_contentbar">
                            <div class="product_contentbar">
                                <div class="product">巧克力蛋糕巧克力蛋糕</div>
                                <div class="product_product_priceandamount_product_twandprice">
                                    <div class="product_priceandamount">
                                        <div class="proudct_amount_x">X</div>
                                        <div class="proudct_amount_number">1</div>
                                    </div>
                                    <div class="product_twandprice">
                                        <div class="product_price_tw">NT$</div>
                                        <div class="product_price">500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="combination_contentbar">
                            <div class="product_contentbar">
                                <div class="product">卡片普通</div>
                                <div class="product_product_priceandamount_product_twandprice">
                                    <div class="product_priceandamount">
                                        <div class="proudct_amount_x">X</div>
                                        <div class="proudct_amount_number">1</div>
                                    </div>
                                    <div class="product_twandprice">
                                        <div class="product_price_tw">NT$</div>
                                        <div class="product_price">500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="combination_contentbar">
                            <div class="product_contentbar">
                                <div class="product">普通蠟燭</div>
                                <div class="product_product_priceandamount_product_twandprice">
                                    <div class="product_priceandamount">
                                        <div class="proudct_amount_x">X</div>
                                        <div class="proudct_amount_number">1</div>
                                    </div>
                                    <div class="product_twandprice">
                                        <div class="product_price_tw">NT$</div>
                                        <div class="product_price">500</div>
                                    </div>
                                </div>
                            </div>
                            <span class="addnew_product_hr2"></span>
                        </div>
                        <div class="combination_contentbar">
                            <div class="product_contentbar">
                                <div class="product">小計</div>
                                <div class="product_product_priceandamount_product_twandprice">
                                    <div class="product_priceandamount">
                                    </div>
                                    <div class="product_twandprice">
                                        <div class="product_price_tw">NT$</div>
                                        <div class="product_price">500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product_logo_img">
                        <img src="../assets/images/cho_cake.jpg" alt="">
                    </div>
                </section>
                <section id="product_details_combination4">
                    <router-link id="product_details_combination_router" to="shopping_cart">
                        <button id="product_details_combination_checkout">
                            <div class="product_details_combination_checkout_text">
                                前往購物車$610
                            </div>
                        </button>
                    </router-link>
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
    name:'product_detail',
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
// @import "../assets/style/var.scss";
*{
    box-sizing: border-box;
}
$bg:#EFE6E4;
$h1 : 36px;
$h2 : 28px;
$h3 : 24px;
$h4 : 20px;
$p : 16px;
$shadow:4px 4px 5px 0 rgba(0, 0, 0, 0.3);
$darkGrey : #515151;
$palePike : #DFB9B0;
$lightPike : #EFE6E4;
$lightYellow : #F4E9C9;
body{
    background-color: $bg;
}
#product_details{
    background-color: $lightPike;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}
#product_details_combination1{
    max-width: 1120px;
    width:100%;
    margin: 0 auto;
    margin-top: 150px;
    background-color: $palePike;
    // .combination_titlebar{
    //     // width: 100%;
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: center;
    // }
    //     .title{
    //         margin-top: 35px;
    //         margin-bottom: 85px;
    //         font-size: 36px;
    //     }
    #cake_information{
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 100px;
        max-width: 900px;
        width: 95%;
        display: flex;
        justify-content: space-between;
        #cake_img_outline{
            // margin: 100px;
            width: 350px;
            height: 380px;
            position: relative;
            margin-right: 20px;
            z-index: 1;
            .cake_img{
                width: 350px;
                height: 380px;
            }
            #change_cake{
                width: 100px;
                height: 100px;
                left: 250px;
                top: 280px;
                z-index: 5;
                position: absolute;
                box-shadow: $shadow;
                cursor: pointer;
            }
        }
        #cake_details{
            max-width: 470px;
            height: 380px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            #cake_titlebar{
                height: 50px; 
                display: flex;
                align-items: center;
                justify-content: space-between;
                // margin-bottom: 80px;
                #cake_title{
                    font-size: 36px;
                    display: inline-block;
                }
                .cake_detail_img{
                    object-fit: cover;
                    width: 20px;
                    height: 20px;
                    margin-left: 20px;
                    margin-top: 10px;
                    cursor: pointer;
                }       
                #cake_clear{
                    width: 100px;
                    height: 40px;
                    align-items: center;
                }
                button{
                    display: inline-block;
                    width: 100px;
                    height: 40px;
                    font-size: 20px;
                    border: 2px solid $darkGrey;
                    background-color: $palePike;
                    border-radius: 10px;
                    box-shadow: $shadow;
                    cursor: pointer;
                }
            }
            #cake_content{
                max-width: 470px;
                width: 100%;
                font-size: 16px;
            }
            #cake_size_quantity{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                // height: 120px;
                width: 100%;
                font-size: 0;
                margin-top: 40px;
                #cake_quantity{
                    display: block;
                    margin-bottom: 40px;
                    .qtyminus,.qtyplus{
                        cursor: pointer;
                        width:50px;
                        height: 40px;
                        display: inline-block;
                        font-size: 25px;
                        background-color: #F7Edd4;
                    }
                    .qty{
                        background-color: white;
                        margin: 0;
                        display: inline-block;
                        width: calc(100% - 50px - 50px);
                        height: 40px;
                        padding: 0px;
                        text-align: center;
                        font-size: 20px;
                        box-sizing: border-box;
                    }
                }
                #cake_size{
                    display: block;
                    text-align: right;
                    background-color: white;
                    select{
                        cursor: pointer;
                        width: 100%;
                        height: 40px;
                        font-size: 20px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
.cake_titlebar_content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
}
.addenda_titlebar{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    max-width: 900px;
    width:95%;
    .addenda_title{
        font-size: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }
    .addenda_cancel_icon{
        display: inline-block;
        width: 35px;
        height: 35px;
        img{
            object-fit: cover;
            background-color: black;
        }
    }
}
.addenda_detail_item{
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    // margin-left: 100px;
    // margin-right: 100px;
    align-items: center;
    #addenda_detail{
        max-width: 350px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .addenda_img{
        width: 200px;
        height: 200px;
        img{
            object-fit: fill;
            width: 200px;
            height: 200px;
        }
    }    
    .addenda_describe{
        max-width: 120px;
        white-space:pre-wrap;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        align-items: center;
        justify-content: center;
    }
    .addenda_detail_outline{
        max-width: 470px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .addenda_amount{
            width: 200px;
            height: 40px;
            font-size: $h4;
            cursor: pointer;
            select{
                width: 200px;
                height: 40px;
                font-size: $h4;
                text-align: center;
                background-color: #F8F8F8;
                cursor: pointer;
            }
        }
        .addenda_twandprice{
            align-self: center;
            display: flex;
            justify-content: space-between;
            max-width: 120px;
            width: 100%;
            .addenda_price_tw{
                font-size: $h3;
            }
            .addenda_price{
                font-size: $h3;
                align-self: center;
                text-align: right;
                max-width: 100px;
                width: 100%;
            }
        }
        span{
            bottom{
                margin-bottom: 80px;
            }
    }
    }
    // span{
    //     bottom{
    //         margin-bottom: 80px;
    //         border: 1px solid red;
    //         height: 1px;
    //         width: 5px;
    //     }
    // }
}
.addenda_block{
    padding-top: 30px;
    padding-bottom: 50px;
    background-color: #F7Edd4;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    // padding-bottom: 50px;
    #block_line{
        border: 1px solid #707070;
        margin: 0 auto;
        margin-top: 80px;
        margin-bottom: 60px;
        width: 80%;
        height: 1px;
    }
}
.addnew_product_hr{
    max-width: 900px;
    margin: 0 auto;
    border-top: 1px solid $darkGrey;
    width: 100%;
    display: block;
    margin-top: 80px;
    margin-bottom: 60px;
}
.new_addenda_titlebar{
    width: 100%;
    height: 200px;
    max-width: 900px;
    margin: auto;
    display: flex;
    background-color:rgba(255, 255, 255, .5);
    justify-content: center;
    align-items: center;
    .new_addenda{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 120px;
        height: 120px;
        padding-top: 15px;
        padding-bottom: 20px;
        cursor: pointer;
        // opacity: 1;
        .new_addenda_title{
            font-size: $h4;
            margin: 0 auto;
            color: $palePike;
        }
        img{
            width: 45px;
            height: 45px;
            align-self: center;
        }
    }
    
}
.addnew_product_hr2{
    max-width: 900px;
    margin: 0 auto;
    // border-top: 1px solid $darkGrey;
    width: 100%;
    display: block;
    // margin-top: 80px;
    margin-bottom: 50px;
}
#product_details_combination1_commit{
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: $darkGrey;
    width: 120px;
    height: 40px;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
}
#product_details_combination1_commit:hover{
    color: $lightYellow;
}
#product_details_combination2{
    cursor: pointer;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 150px;
    background-color: #EBDCD8;
    .new_combination{
        margin-left: 60px;
        max-width: 280px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .new_combination_title{
            font-size: $h2;
        }
        img{
            width: 40px;
            height: 40px;
        }
    }
}
.product_product_priceandamount_product_twandprice{
    display: flex;
    justify-content: space-between;
    max-width: 425px;
    width: 100%;
}
#product_details_combination3{
    width: 100%;
    max-width: 1120px;
    height: 350px;
    background-color: #EBDCD8;
    display: flex;
    justify-content: space-between;
    #product_details_total{
        width: 100%; 
        max-width: 700px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 60px;
        margin-top: 50px;
        #combination_titlebar{
            margin-bottom: 40px;
            #combination_title{
                font-size: $h2;
            }
        }
        .combination_contentbar{
            max-width: 700px;
            width: 100%;
            font-size: $h4;
            .product_contentbar{
                display: flex;
                justify-content: space-between;
                // margin-bottom: 10px;
                max-width: 700px;
                width: 100%;
                align-items: center;
                .product{
                    display: inline-block;
                    max-width: 280px;
                    // margin-right: 80px;
                    width: 100%;
                    font-size: $h4;
                }
                .product_priceandamount{
                    display: flex;
                    justify-content: space-between;
                    max-width: 50px;
                    width: 100%;
                    
                    .proudct_amount_x{
                        max-width: 20px;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }
                    .proudct_amount_number{
                        display: inline-block;
                        margin-left: 5px;
                        width: 100%;
                        max-width: 30px;
                    }
                }
            }
        }
    }
    #product_logo_img{
        max-width: 360px;
        width: 70%;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // margin: 0 auto;
        position: relative;
        img{
            // max-width: 250px;
            width: 250px;
            position: absolute;
            top: 0;             
            bottom: 0;           
            left: 0;        
            right: 0;
            margin: auto;  
            height: 190px;
        }
    }
}
.product_price_tw{
    display: flex;
    justify-content: space-between;
    max-width: 50px;
    width: 100%;
}
.product_price{
    margin-left: 5px;
    display: inline-block;
    max-width: 100px;
    width: 100%;
    text-align: right;
}
.product_twandprice{
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    width: 100%;
}
.addnew_product_hr2{
    max-width: 700px;
    margin: 0 auto;
    border-top: 1px solid $darkGrey;
    width: 100%;
    display: block;
    margin-top: 25px;
    margin-bottom: 25px;
}
#product_details_combination4{
    // max-width: 1120px;
    // width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 100px;
    border: 0;
}
#product_details_combination_checkout{
    background-color: #F7EDD4;
    // max-width: 1120px;
    width: 90%;
    height: 70px;
    font-size: 24px;
    border: 0;
    border-radius: 5px;
    box-shadow: $shadow;
    cursor: pointer;
    color: $darkGrey;
}
#product_details_combination_checkout:hover{
    color: #9F746B;
}
#product_details_combination_router{
    display: flex;
    justify-content: center;
    text-decoration: none;
}
.product_details_combination_checkout_text{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 768px;
    // width: 100%;
}
@media screen and (max-width:767.98px){ 





    .titleh1rwd{
            display: flex;
            justify-content: center;
            margin: 0 auto;
            align-items: center;
            
    }
}
</style>