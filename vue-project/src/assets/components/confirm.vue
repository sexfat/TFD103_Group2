<template>
    <div class="outline">
        <h1>狀態是否改為停用</h1>
        <div class="check">
            <button class="true">確認</button>
            <button class="false">取消</button>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "confirm",
  methods: {},
  components:{
  },
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
*{
    box-sizing: border-box;
}
.outline{
    width:570px;
    height:300px;
    border-radius: 5px;
    background: #EFE6E4;
    // border:1px solid red;
    h1{
        text-align: center;
        color:#515151;
    }
    div{
        display:flex;
        justify-content: center;
        button{
            width:250px;
            height:75px;
            margin:60px 10px;
            border:none;
            border-radius:5px;
            box-shadow: $shadow;
            font-size:24px;
            cursor: pointer;
            color:#515151;
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