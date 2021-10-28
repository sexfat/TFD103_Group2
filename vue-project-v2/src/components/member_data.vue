<template>
    <div>
        <div class="outline">
            <div class="img_outline">
                <img src="../assets/images/cho_cake.jpg" alt="">
            </div>
            
            <div class="text_outline">
                <div class="forPosition">
                    <span>
                        <switchButton title="狀態" style="marginRight:30px"></switchButton>
                    <font-awesome-icon icon="fa-solid fa-xmark" style="fontSize:24px;cursor:pointer" />
                    </span>
                </div>
                <div class="text">
                    <label for="">Email<input type="text"></label>
                    <label for="">姓名<input type="text"></label>
                </div>
                <div class="text">
                    <label for="">暱稱<input type="text"></label>
                    <label for="">創建日期<input type="text"></label>
                </div>
                <div class="text">
                    <label for="">手機號碼<input type="text"></label>
                    <label for="">生日<input type="text"></label>
                </div>
                <div class="adress">
                    <label for="">地址</label>
                    <textarea name="" id="" cols="50" rows="3"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import switchButton from "./switch_button"
export default {
  name: "member_data",
  methods: {},
  components:{
      switchButton,
  },
  
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
*{
    box-sizing: border-box;
   
}
.outline{
    display:flex;
    width:775px;
    height:250px;
    padding:20px;
    background: #F7DCDC;
    border-radius:5px;
    // transform:scale(2);
    .img_outline{
        flex:.5;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .text_outline{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        // position:relative;
        // top:40px;
    }
    .text{
        display:flex;
        margin:5px 0;
        label{
            flex:1;
            padding:0 5px;
        }
        input{
            float:right;
        }
    }
}
.adress{
    padding:0 5px;
    display:flex;
    label{
        width:15%;
    }
    textarea{
        vertical-align: top;
        width:100%;
        resize:none;
    }
}
.forPosition{
    display:flex;
    justify-content: flex-end;
    // flex-direction: column;
    display:none;
    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.forPosition.open{
    display: flex;
}
</style>