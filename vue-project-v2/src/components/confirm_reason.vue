<template>
    <div class="outline">
        <h1>確定下架該貼文?</h1>
        <select name="" id="">
            <option value="">123</option>
        </select>
        <div class="check">
            <button class="true">確認</button>
            <button class="false">取消</button>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "confirm_reason",
  methods: {},
  components:{
  },
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
*{
    box-sizing: border-box;
}
.outline{
    width:570px;
    height:300px;
    border-radius: 5px;
    background: #EFE6E4;
    // border:1px solid red;
    display:flex;
    flex-direction: column;
    align-items: center;
    select{
        width:50%;
        text-align: center;
        font-size:20px;
        border:none;
        border-radius: 5px;
        color:#515151;
    }
    h1{
        text-align: center;
        color:#515151;
    }
    div{
        display:flex;
        justify-content: center;
        align-items: center;
        button{
            width:250px;
            height:75px;
            margin:60px 10px;
            border:none;
            border-radius:5px;
            box-shadow: $shadow;
            font-size:24px;
            color:#515151;
            font-weight:900;
            cursor: pointer;
            &:active{
                box-shadow: inset $shadow;
            }
        }
        button:nth-child(1){
            background: #DFB9B0;
        }
        button:nth-child(2){
            background: #F7EDD4;
        }
    }
}
</style>