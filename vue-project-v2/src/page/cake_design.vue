<template>
    <div>
        <headercom></headercom>
        <!-- 開始製作 -->
        <section id="first_screen">
            <div id="first_screen_button">
                    <buttontest title=" 開始製作"></buttontest>
            </div>
            <div id="first_screen_cake">
            <img id="first_screen_cake_look" src="../assets/images/cake_design_look.svg" alt="">
            <div id="first_screen_cake_demo">
                <img id="first_screen_cake_front" src="../assets/images/cake_design_cake_demo.png" alt="">
                <img id="first_screen_cake_back" src="../assets/images/cake_design_cake_demo2.png" alt="">
                <!-- <div id="first_screen_cake_back"></div> -->
            </div>
            </div>
            <img id="first_screen_bg" src="../assets/images/cake_design_gb_1.jpg" alt="">
        </section>
         <!-- 開始製作 -->
         <!-- 製作中 -->
         <section id="second_screen">
             <div id="production_area">
                 <div id="cake_box">
                     <img id="big_cake_model" src="" alt="">
                 </div>
                 <input type="button">
             </div>
             <!-- 選擇糕體 -->
             <div id="choose_cake_model">
                 <div id="cake_model_title_box">
                     <img src="../assets/images/button_butter.png" alt="" style="width:30px"><p>選擇糕體</p><img src="../assets/images/button_butter.png" alt="" style="width:30px">
                 </div>
                 <div id="choose_cake_model_box">
                     <button id="left_move" style="z-index:10;">《</button>
                     <div id="choose_cake_model_box_contents">
                         <div>
                            <img class="cake" id="cake_model1" src="../assets/images/cake_design/cake_model1.png" alt="">
                            <img class="cake" id="cake_model2" src="../assets/images/cake_design/cake_model2.png" alt="">
                            <img class="cake" id="cake_model3" src="../assets/images/cake_design/cake_model3.png" alt="">
                            <img id="cake_plate" src="../assets/images/cake_design/plate.png" alt="">
                         </div>
                     </div>
                     <button id="right_move" style="z-index:10;">》</button>
                 </div>
                 <div><img src="" alt=""></div>
                 <div>
                     <button>使用</button>
                     <img src="" alt="">
                 </div>
             </div>
             <!-- 選擇糕體 -->
             <!-- 選擇水果 -->
             <div id="choose_cake_fruits">

             </div>
             <!-- 選擇水果 -->
             <!-- 選擇裝飾 -->
             <div id="choose_cake_decorations">

             </div>
             <!-- 選擇裝飾 -->
         </section>
         <!-- 製作中 -->
        <footercom></footercom>
    </div>
</template>
<script>
import $ from 'jquery'
import headercom from '../components/headercom'
import buttontest from '../components/button_h1.vue'
import footercom from '../components/footercom'

export default {
    name:"cakeDesign",
    components:{
        headercom,
        buttontest,
        footercom,
    },
    mounted() {

        // 選擇-蛋糕糕體
        $("#left_move").click(function(){
            $("#choose_cake_model_box_contents").children("div").animate({marginLeft:'-=340px'},200);
        });
        $("#right_move").click(function(){
            $("#choose_cake_model_box_contents").children("div").animate({marginLeft:'+=340px'},200);
            if ($("div").marginLeft >= 500) {
                $("#choose_cake_model_box_contents").children("div").animate({marginLeft:'-=500px'},200);
            }
        });
        // 當選項到底 會跑回第一個
        
    },
}
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
    body{
        margin: 0;
        position: relative;
        background-color: #EFE6E4;
    }

    //---------------------------------- 開始製作 first_screen ----------------------------------
    section#first_screen{
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0;
        position: relative;
        overflow: hidden;
        display: none;
        div#first_screen_button{
            z-index: 2;
            position: absolute;
            left: 50%;
            bottom: 20%;
            transform: translateX(-50%);
        }
        div#first_screen_cake{
            z-index: 1;
            width: 320px;
            height: 100vh;
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            img#first_screen_cake_look{
                // z-index: 1;
                width: 60px;
                position: absolute;
                top: 28%;
                right: 0;
                transform-origin: bottom left;
                // transform: translate(-50%, -50%);
                animation-name: lookmov;
                animation-duration: 1s;
                animation-iteration-count: infinite;
                animation-direction: ease;
                animation-fill-mode:both;
            }
            div#first_screen_cake_demo{
                // z-index: 1;
                position: relative;
                top: -5%;
                left: -10px;
                width: 320px;
                height: 320px;
                // top: 45%;
                // left: 50%;
                // transform: translate(-50%, -50%);
                /*preserve the back when fliping*/
                transform-style:preserve-3d;
                transition:0.5s all ease;
                &:hover{
                    transform:rotateY(180deg);
                }
                img#first_screen_cake_front{
                    position: absolute;
                    width: 100%;
                    /*hide backface*/
                    backface-visibility:hidden;
                    
                }
                img#first_screen_cake_back{
                    position: absolute;
                    width: 100%;
                    /*hide backface*/
                    backface-visibility:hidden;
                    // color:#333;
                    // font-size:1.5rem;
                    // background:url("../assets/images/cake_design_cake_demo2.png") center top repeat;
                    transform:rotateY(180deg);
                }
            }
        }
        img#first_screen_bg{
            z-index: 0;
            height: 100vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    //---------------------------------- 開始製作 second_screen ----------------------------------
    section#second_screen{
        max-width: 1200px;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0;
        position: relative;
        // overflow: hidden;
    }
    div#production_area{
        height: 100vh;
        display: flex;
        justify-content: center;
        grid-column: 1/3;
        background-image: url("../assets/images/index_kitchen_img.png");
        background-size: cover;
        background-repeat:no-repeat;
        input{
            background-image: url("../assets/images/next_step.png");
            width: 85px;
            height: 85px;
            background-size: 100%;
            border: none;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                transform: translateY(-5px);
            }
        }
    }
    div#choose_cake_model{
        height: 100vh;
        display: flex;
        // justify-content: center;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        grid-column: 3/4;
        position: relative;
        div#cake_model_title_box{
            margin: 0;
            margin-top: 80px;
            height: 6%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            p{
                color: #515151;
            }
        }
        div#choose_cake_model_box{
            margin: 0;
            height: 44%;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            div#choose_cake_model_box_contents{
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                width: 170px;
                height: 170px;
                margin: 0 10px;
                div{
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    img.cake{
                        width: 170px;
                        margin: 0;
                    }
                    img#cake_plate{
                        position: absolute;
                        width: 170px;
                        bottom: 0;
                        z-index: -1;
                    }
                }
            }
        }
    }
    //---------------------------------- first_screen 動畫 ----------------------------------
    @keyframes lookmov {
        0%{
            transform: rotate(6deg) translate(10% , 0%);
        }
        45%{
            transform: rotate(-6deg) translate(10% , 0%);
        }
        60%{
            transform: rotate(6deg) translate(10% , 0%);
        }
        75%{
            transform: rotate(-6deg) translate(10% , 0%);
        }
        100%{
            transform: rotate(6deg) translate(10% , 0%);
        }
    }
</style>