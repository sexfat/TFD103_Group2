<template  >
    <div>
        <header></header>
        <!--等header補充-->
        <div class="assign_page_main_bar">
            <div class="assign_page_title_h1_outline">
                <div>
                <titleh1 title="Sign in"></titleh1>
                </div>
                <div>
                <titleh1 title="Register"></titleh1>
                </div>
            </div>
        </div>
        <main id="assign_page_main">
            <!-- 登入區塊 -->
            <section id="sign_in">
                <label for="account">帳號 </label>
                <input type="text" id="account" placeholder="請輸入帳號" />
                <label for="password">密碼 </label>
                <input type="text" id="password" placeholder="請輸入密碼" />
                <a href="#">忘記密碼</a>
                <button class="sign_button">SIGN IN</button>
                <button class="sign_button">以Instagram登入<font-awesome-icon icon="fa-brands fa-instagram" /></button>
                <button class="sign_button">以LINE帳號登入<font-awesome-icon icon="fa-brands fa-line" /></button>
                <button class="sign_button">以Google登入<font-awesome-icon icon="fa-brands fa-google" /></button>
                
            </section>
            <!-- 註冊區塊 -->
            <section id="register">
                <label for="email">Email </label>
                <input type="text" id="email" placeholder="請輸入Email" />
                <label for="password">密碼 </label>
                <input type="text" id="password" placeholder="請輸入密碼" />
                <label for="re_password">確認密碼 </label>
                <input type="text" id="re_password" placeholder="請重複輸入帳號" />
                <label for="user_name">姓名 </label>
                <input type="text" id="user_name" placeholder="請輸入姓名" />
                <label>生日</label>
                <div>
                <select name="" id="years">
                    <option value="">1999</option>
                    <option value="">2000</option>
                </select>
                <select name="" id="months">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
                <select name="" id="days">
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
                </div>
                <button class="sign_button">SIGN UP</button>
            </section>
        </main>
        <footer></footer><!--待補充footer-->
        
    </div>
</template>
<script>
import $ from 'jquery'
    import titleh1 from "../components/title_h1.vue";
export default {
    name:'assignPage',
    components:{
        titleh1,
        methods:{
            
        },
        
    }
    
}

</script>
<style scoped lang="scss">
@import "../style/var.scss";
$bg:#EFE6E4;
body{
    background-color: $bg;
}
header{
    width:1200px;
    height:80px;
    margin:0 auto;
    border:1px solid red; /*品涵這邊是留給你你隨意改*/
}
.assign_page_title_h1_outline{
    width:1200px;
    margin:0 auto;
    display: flex;
    border:1px solid blue;
    >div{
        flex:1;
        margin-top: 70px;
        margin-left:40px;
        margin-bottom:100px;
        span{
            display: none;
        }
    }
}
#assign_page_main{
    width:1200px;
    border:1px solid black;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    section{
        border:1px solid red;
        margin-left:40px;
        display:flex;
        flex-direction: column;
        color:#515151;
        // text-align: center;
        label{
            font-size: 20px;
            margin-bottom:5px;
        }
        input{
            font-size: 20px;
            margin-bottom:10px;
            width:460px;
            height:45px;
            border-radius: 5px;
            
        }
    }
    button{
        width:460px;
        height:55px;
        border-radius: 5px;
        background-color:#F7EDD4;
        margin-top: 20px;
        font-size: 20px;
        color:#515151;
        // box-shadow: $shadow;
        &:hover{
            cursor: pointer;
            background-color: #DFB9B0;
        }
    }
    #sign_in{
        a{
            margin-top:-10px;
            margin-bottom:17px;
            font-size: 14px;
            text-decoration: none;
            color:#515151;
            &:hover{
                color:blue;
            }
        }
        button:nth-child(6){
            margin-top:33px;
        }
    }
    #register{
        select{
            width:140px;
            height:45px;
            margin-right:16px;
            border-radius: 5px;
        }
    }
}
option{
    text-align: center;
}
</style>