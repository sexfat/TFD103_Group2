<template>
  <section id="right_section">
    <h1>折價券</h1>
    <div class="content">
      <input type="text" placeholder="會員ID" />
      <input type="text" placeholder="價錢限制" />
      <select name="" id="">
        <option value="">使用限制</option>
      </select>
      <input type="text" placeholder="期限" />
    </div>
    <div class="coupon">
      <coupon class="ticket"></coupon>
      <input type="text" placeholder="張數" />
    </div>
    <button>確認送出</button>
  </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import coupon from "../components/behind_page_coupon";
export default {
  name: "upload_vote",
  components: {
    behindHeader,
    coupon,
  },
  data() {
    return {
      showWhat: [],
    };
  },
  methods: {},
  mounted() {
    $("#coupon").siblings().removeClass("target");
    $("#coupon").addClass("target");
  },
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";

* {
  box-sizing: border-box;
}
#right_section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  h1 {
    align-self: flex-start;
    margin-bottom:50px;
    font-size:36px;
    font-weight:500;
  }
  .content {
    display: grid;
    grid-template-columns:repeat(4,1fr);
    gap:10px;
    input{
        height:45px;
        font-size:24px;
        padding-left:10px;
    }
    select{
        text-align: center;
        font-size:24px;
    }
  }
  .coupon{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-top:50px;
      margin-bottom:50px;
      
      input{
          align-self: flex-end;
          width:150px;
          height:45px;
          font-size:24px;
          padding-left:10px;
      }
  }
  button{
      align-self: center;
      width:180px;
      height:60px;
      background: #454545;
      color:white;
      cursor: pointer;
      font-size:24px;
      border:none;
      border-radius:5px;
      &:active{
          box-shadow: inset $shadow;
      }
  }
}
</style>