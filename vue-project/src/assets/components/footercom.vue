<template>
    <footer id="footer">
        <div class="footer_icon">
            <a href=""><img src="../images/fb_icon.svg" alt=""></a>
            <a href=""><img src="../images/ig_icon.svg" alt=""></a>
            <a href=""><img src="../images/love_icon.svg" alt=""></a>
        </div>
        <div class="footer_text_box">
            <div class="footer_text">
                <p>星期一至五 / 服務時間：9:00-20:00<br>星期六至日 / 服務時間：12:00-20:00</p>
                <p>電話：02-25570779<br>email：acake@gmail.com.tw</p>
                <p>有任何問題可使用官網留言<br>來電詢問/FB/IG 粉專私訊留言 :)</p>
            </div>

            <div class="footer_text_two">
                <p class="one">© A cake All Rights Reserved.</p>
                <p class="two">本網站為緯育TibaMe前端設計工程師班第70期學員專題作品，本平台僅供學習、展示之用。若有侵權疑慮，您可以私訊 [TibaMe-前端設計工程師養成班]，後續會由專人協助處理。</p>
            </div>
        </div>
    </footer>
</template>
<script>
import $ from 'jquery'
export default {
    name:"footercom",
}
</script>
<style scoped lang="scss">
@import "../style/var.scss";

*{
     box-sizing: border-box;
}

footer#footer{
    height: 350px;
    background-color: #DFB9B0;
    padding:5px 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    div.footer_icon{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            margin: 15px;
            width: 30px;
            display: flex;
            img{
                width: 100%;
            }
        }
    }
    div.footer_text_box{
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #515151;
        div.footer_text{
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                margin: 30px;
                text-align: center;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
    div.footer_text_two{
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        p.one{
            font-size: 10px;
        }
        p.two{
            font-size: 14px;
        }
    }
}
/* RWD */
@media all and (max-width: 768px){
    footer#footer{
        height: 510px;
        div.footer_text{
            flex-direction: column;
            p{
                margin: 20px;
            }
        }
    }
}
</style>