<template>
    <div class="confirm_outline">
        <h1>狀態是否改為停用</h1>
        <div class="check">
            <button class="true" @click="yes">確認</button>
            <button class="false" @click="cancel">取消</button>
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
  methods:{
      cancel(){
          this.$emit("no",1)
      },
      yes(){
          this.$emit("yes",0)
      }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
*{
    box-sizing: border-box;
}
.confirm_outline{
    width:570px;
    height:300px;
    border-radius: 5px;
    background: #EFE6E4;
    display:flex;
    flex-direction: column;
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