<template>
  <div id="coupon">
    <div id="coupon_left_block">
      <div id="discount_amout">$<span>150</span></div>
      <div id="A_cake_text_logo">
        <img src="http://via.placeholder.com/60x22" alt="" />
      </div>
      <div id="coupon_left_decoration_img">
        <img src="http://via.placeholder.com/40x0" alt="" />
      </div>
      <div id="use_threshold">消費滿 <span>1000 </span>即可折抵</div>
      <img id="bottom_decoration_img" src="../images/snowRWD.svg" />
    </div>
    <div id="coupon_right_block">
      <div id="expiration">
        <span>使用期限</span>
        <span id="expiration_date">2021/10/31</span>
      </div>
      <div id="coupon_right_decoration_img">
        <img src="http://via.placeholder.com/39x39" alt="" />
      </div>
      <div id="expiration_countdown">即將失效：剩下<span v-html="'&nbsp 10 &nbsp'"></span>天</div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "coupon",
  props: [],
  
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
@import "../style/var.scss";

#coupon {
  display: inline-flex;

  #coupon_left_block {
    width: 600px;
    height: 300px;
    background-color: #f0d5ce;
    position: relative;
    border-right: 1px solid $palePike;
    border-top-left-radius: 5px;
    #discount_amout {
      font-size: 100px;
      line-height: 106px;
      position: absolute;
      top: 38px;
      left: 54px;
      color: #515151;
    }

    #A_cake_text_logo {
      width: 120px;
      height: 44px;
      position: absolute;
      top: 66px;
      right: 68px;
      overflow: hidden;

      // border: 1px solid blue;

      > img {
        width: 100%;
      }

      > span {
        font-size: 10px;
        line-height: 8px;
        color: #515151;
      }
    }

    #coupon_left_decoration_img {
      // 此處樣式未確定
      position: absolute;
      left: 54px;
      bottom: 40px;
    }

    #use_threshold {
      font-size: $p * 2;
      color: #515151;
      position: absolute;
      bottom: 60px;
      right: 68px;
      display:flex;
    }

    #bottom_decoration_img {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: rotate(180deg);
    }

    > svg {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: rotate(180deg);
    }
  }

  #coupon_right_block {
    background-color: #f7edd4;
    position: relative;
    width: 240px;
    height: 300px;
    border-bottom-right-radius: 10px;

    &::after {
      content: "";
      display: inline-block;
      width: 84px;
      height: 84px;
      position: absolute;
      top: 0;
      right: 0;
      background-image: linear-gradient(45deg, #efdcac 50%, $palePike 50%);
      border-bottom-left-radius: 10px;
    }

    #expiration {
      width: 160px;
      height: 62px;
      position: absolute;
      top: 60px;
      left: 40px;
      display: flex;
      flex-direction: column;

      > span:first-child {
        align-self: flex-start;
        font-size: 24px;
        transform: scale(0.83);
        transform-origin: center left;
        line-height: 28px;
        color: #515151;
        margin-bottom: 6px;
      }

      #expiration_date {
        align-self: flex-end;
        font-size: 24px;
        line-height: 28px;
        color: #515151;
      }
    }

    #coupon_right_decoration_img {
      position: absolute;
      top: 130px;
      left: 20px;
      width: 78px;
      height: 78px;
      overflow: hidden;

      > img {
        width: 100%;
      }
    }

    #expiration_countdown {
      color: #e8542e;
      font-size: 20px;
      white-space: nowrap;
      transform-origin: center left;
      position: absolute;
      line-height: 20px;
      left: 30px;
      bottom: 50px;
      display:flex;
    }
  }
}
</style>