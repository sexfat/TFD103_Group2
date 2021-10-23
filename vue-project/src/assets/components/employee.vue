<template>
    <div>
    <div class="outline">
        <div class='img_outline'>
        <img src="" alt="" />
        <button>修改照片</button>
        </div>
        <div class="flex">
        <div>
            <label for="">員工編號</label>
            <span><input type="text"></span>
        </div>
        <div>
            <label for="">員工密碼</label>
            <span><input type="text"></span>
        </div>
        <div>
            <label for="">員工姓名</label>
            <span><input type="text"></span>
        </div>
        </div>
        <div class="flex">
        <div>
            <label for="">創建員工</label>
            <span><input type="text"></span>
        </div>
        <div>
            <label for="">創建日期</label>
            <span><input type="text"></span>
        </div>
        <div>
            <span for="">權限</span>
            <select name="" id=""><option value="">1</option></select>
        </div>
        </div>
        <div class="flex">
        <span>狀態
            <span class="switch_button">
                <span class="switch"></span> <!--按鈕開關-->
            </span>
        </span>
        <button>修改</button>
        <button>確認</button>
        </div>
    </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "employee",
  methods: {},
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
*{
    box-sizing: border-box;
}
.outline{
    width:1000px;
    height:250px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding:20px;
    .img_outline{
        // width:100%;
        height:100%;
        background: blue;
        flex:1;
        position:relative;
        
        button{
            position:absolute;
            right:0px;
            bottom:0;
            width:100px;
            height:50px;
            border:none;
            border-radius:5px 0 0 0;
            font-size:20px;
            background: #454545;
            color:white;
            font-weight: 900;
            box-shadow: $shadow;
        }
    }
    .flex{
        flex:1;
        display:flex;
        flex-direction: column;
        height:100%;
        justify-content: space-between;
        align-items: center;
        font-size:0;
        div{
            flex:1;
            font-size:20px;
            display:flex;
        }
    }
}

.switch_button{
    width:100px;
    height:20px;
    border-radius:10px;
    display:inline-block;
    position:relative;
    vertical-align: sub;
    margin-left:5px;
    span{
        width:10px;
        height:20px;
        display:inline-block;
        position:absolute;
        border-radius:50%;
        left:90px;
    }
}
</style>