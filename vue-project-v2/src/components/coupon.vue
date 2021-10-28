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
      <div id="use_threshold">消費滿<span>1000</span>即可折抵</div>
      <img id="bottom_decoration_img" src="../assets/images/snowRWD.svg" />
    </div>
    <div id="coupon_right_block">
      <div id="expiration">
        <span>使用期限</span>
        <span id="expiration_date">2021/10/31</span>
      </div>
      <div id="coupon_right_decoration_img">
        <img src="http://via.placeholder.com/39x39" alt="" />
      </div>
      <div id="expiration_countdown">即將失效：剩下<span>10</span>天</div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "coupon",
  props: [],
  mounted(){
      $("#coupon").siblings().removeClass("target")
      $("#coupon").addClass("target")
  }
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
@import "../assets/style/var.scss";

#coupon {
  display: inline-flex;

  #coupon_left_block {
    width: 300px;
    height: 150px;
    background-color: #f0d5ce;
    position: relative;
    border-right: 1px solid $palePike;
    border-top-left-radius: 5px;

    #discount_amout {
      font-size: 50px;
      line-height: 56px;
      position: absolute;
      top: 19px;
      left: 27px;
      color: #515151;
    }

    #A_cake_text_logo {
      width: 60px;
      height: 22px;
      position: absolute;
      top: 33px;
      right: 34px;
      overflow: hidden;

      // border: 1px solid blue;

      > img {
        width: 100%;
      }

      > span {
        font-size: 5px;
        line-height: 4px;
        color: #515151;
      }
    }

    #coupon_left_decoration_img {
      // 此處樣式未確定
      position: absolute;
      left: 27px;
      bottom: 20px;
    }

    #use_threshold {
      font-size: $p;
      color: #515151;
      position: absolute;
      bottom: 30px;
      right: 34px;
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
    width: 120px;
    height: 150px;
    border-bottom-right-radius: 5px;

    &::after {
      content: "";
      display: inline-block;
      width: 42px;
      height: 42px;
      position: absolute;
      top: 0;
      right: 0;
      background-image: linear-gradient(45deg, #efdcac 50%, $palePike 50%);
      border-bottom-left-radius: 5px;
    }

    #expiration {
      width: 80px;
      height: 31px;
      position: absolute;
      top: 30px;
      left: 20px;
      display: flex;
      flex-direction: column;

      > span:first-child {
        align-self: flex-start;
        font-size: 12px;
        transform: scale(0.83);
        transform-origin: center left;
        line-height: 14px;
        color: #515151;
        margin-bottom: 3px;
      }

      #expiration_date {
        align-self: flex-end;
        font-size: 12px;
        line-height: 14px;
        color: #515151;
      }
    }

    #coupon_right_decoration_img {
      position: absolute;
      top: 65px;
      left: 10px;
      width: 39px;
      height: 39px;
      overflow: hidden;

      > img {
        width: 100%;
      }
    }

    #expiration_countdown {
      color: #e8542e;
      font-size: 12px;
      white-space: nowrap;
      transform: scale(0.6);
      transform-origin: center left;
      position: absolute;
      line-height: 10px;
      left: 28px;
      bottom: 32px;
    }
  }
}
</style>