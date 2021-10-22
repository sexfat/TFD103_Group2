<template>
	<div class="sale_card_outline">
        <div class="sale_card_img">
            <img src="../images/cho_cake.jpg" alt="" />
        </div>
        <div class="sale_card_description">
            <div class="p_outline">
                <p class="title">ASDASD</p>
                <p class="price">NT $500</p>
            </div>
            <button class="favorite"><span>加入我的最愛<img src="../images/favorites_icon_1.svg" alt=""></span></button>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name:"button_h1",
  props:["title"],
}
</script>
<style scoped lang="scss">
*{
    box-sizing: border-box;
};
@import "../style/var.scss";

.sale_card_outline {
    font-family: "Noto Sans TC", sans-serif;
    background-color: #dfb9b0;
    display: inline-block;
    width: 350px;
    height: 450px;
    border-radius: 5px;
    box-shadow: $shadow;
    .sale_card_img {
        width: 300px;
        height: 300px;
        display: inline-block;
        margin-left:25px;
        margin-top:25px;
        >img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .sale_card_description {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .favorite {
            width: 180px;
            height: 60px;
            border-radius: 40px;
            font-size: 20px;
            background-color: #efe6e4;
            border: none;
            box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
            // padding: 0;
            span{
                display: inline-block;
                position:relative;
                transform: translateY(-2px);
            }
            img{
                width:25px;
                height:25px;
                object-fit: contain;
                transform: translateY(5px);
                margin-left:5px;
                // padding:5px;
            }
            &:hover {
                cursor: pointer;
                background-color: #f4e9c9;
                box-shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3),
                    4px 4px 5px 0 rgba(0, 0, 0, 0.3);
            }
        }
        p {
            font-size: 24px;
            margin: 0;
        }
        .p_outline {
            margin-right: 5px;
            p.title{
                margin-top: 25px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>