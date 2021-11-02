<template>
  <div class="detail_outline">
    
    <!-- <span id="switch_button"><font-awesome-icon icon="fa-solid fa-sort-up" /></span> -->
    <span id="switch_button" @click='open'><font-awesome-icon icon="fa-solid fa-sort-down" /></span>
    
    <div class="text_outline">
      <div class="first_line">
        <div class="first_item">
          <p >訂單ID：</p>
          <p class="content">00000008</p>
        </div>
        <div class="second_item">
          <p>會員ID：</p>
          <p class="content">007485</p>
        </div>
        <div class="third_item">
          <p>狀態</p>
          <select name="" id="">
            <option value="">奧客</option>
            <option value="">超級奧客</option>
          </select>
        </div>
      </div>
      <div class="second_line">
        <div class="first_item">
          <p>下單日期：</p>
          <p class="content">2021/11/20</p>
        </div>
        <div class="second_item">
          <p>寄送日期：</p>
          <p class="content">2021/11/22</p>
        </div>
        <div class="third_item">
          <p>完成日期：</p>
          <p class="content">2021/11/23</p>
        </div>
      </div>
      <div class="third_line">
        <div class="first_item" style="max-width:350px;">
          <p>收件人：</p>
          <p class="content">丁丁</p>
        </div>
        <div class="second_item">
          <p>連絡電話：</p>
          <p class="content">0978654254</p>
        </div>
      </div>
      <div class="forth_line">
        <div class="first_item">
          <p>折價券ID：</p>
          <p class="content">123456</p>
        </div>
        <div class="second_item">
          <p>折價</p>
          <p class="content">120</p>
        </div>
        <div class="third_item">
          <p>運費</p>
          <p class="content">120</p>
        </div>
        <div class="forth_item">
          <p>總價</p>
          <p class="content">1220</p>
        </div>
      </div>
      <div class="fifth_line">
        <div class="first_item">
          <p>寄送地址：</p>
          <p class="content">台北市台南市新北市新竹市台北市台南市新北市新竹市台北市台南市新北市新竹市</p>
        </div>
      </div>
    </div>
    <div class="combo_outline">
      <div class="combo_title">
        <h1>組合1：</h1>
      </div>
      <div class="combo_item">
        <p>巧克力蛋糕</p>
        <p>豪華包裝</p>
        <p>生日卡片</p>
        <p>小計</p>
      </div>
      <div class="combo_prize_outline">
        <div class="combo_prize">
          
          <p class="prize">500</p>
        </div>
        <div class="combo_prize">
          
          <p class="prize">80</p>
        </div>
        <div class="combo_prize">
          
          <p class="prize">50</p>
        </div>
        <div class="combo_prize">
          <p class="prize">630</p>
        </div>
      </div>
    </div>
    <div class="description">
      <input type="text">
      <div class="button_zone">
        <button>修改</button>
        <button>確認</button>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import switchButton from "./switch_button";
export default {
  name: "upload_vote",
  methods: {
    open:　function(e){
      // console.log($(e.target).parents('.detail_outline').siblings())
        $(e.target).parents('.detail_outline').siblings().removeClass('open');
        $(e.target).parents('.detail_outline').toggleClass('open');
    },
  },
  components: {},
  
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
* {
  box-sizing: border-box;
  font-size:20px;
}
.detail_outline {
  height:100px;
  transition:.5s;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:775px;
  padding:20px;
  background: #F7DCDC;
  border-radius: 10px;
  position:relative;
  #switch_button{
    position:absolute;
    top:4px;
    right:20px;
    cursor: pointer;
    display:flex;
    flex-direction: column;
    transition:.2s;
    transform: rotate(0deg);
  }
  .content{
    padding:0 10px;
    border-radius:5px;
    background:#E4E4E4;
  }
}
.detail_outline.open{
  height:850px;
  #switch_button{
    transform: rotate(-180deg);
  }
}
.text_outline {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
 
  .first_line {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .first_item {
      display: flex;
    }
    .second_item {
      display: flex;
    }
    .third_item {
      display: flex;
      justify-content: center;
      align-items: center;
      select{
          margin-left:10px;
          background: white;
      }
      option {
        text-align: center;
      }
    }
  }
  .second_line {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .first_item {
      display: flex;
      
    }
    .second_item {
      display: flex;
    }
    .third_item {
      display: flex;
      option {
        text-align: center;
      }
    }
  }
  .third_line {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    .first_item {
      display: flex;
      margin-right:15px;
    }
    .second_item {
      display: flex;
    }
  }
  .forth_line {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .first_item {
      display: flex;
    }
    .second_item {
      display: flex;
    }
    .third_item {
      display: flex;
      option {
        text-align: center;
      }
    }
    .forth_item {
      display: flex;
    }
  }
  .fifth_line {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .first_item {
      display: flex;
    }
  }
}
.combo_outline{
    display:flex;
    justify-content: space-between;
    margin-top:20px;
    background: #F7EDD4;
    border-radius: 5px;
    padding:20px;
    .combo_title{
        display:flex;
    }
    .combo_item{
        display:flex;
        flex-direction: column;
        font-weight:600;
    }
    .combo_prize_outline{
        display:flex;
        flex-direction: column;
        
        .combo_prize{
            display:flex;
            justify-content: space-between;
        }
    }
}
.description{
    display:flex;
    height:80px;
    margin-top:20px;
    input{
        flex:7;
        margin:0;
        background: white;
        margin-right:15px;
    }
    .button_zone{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        button{
            // margin-bottom:15px;
            border-radius:20px;
            height:30px;
            cursor: pointer;
            color:white;
            background: #454545;
        }
    }
}
</style>