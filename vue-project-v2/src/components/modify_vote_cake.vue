<template>
  <div class="outline">
    <div class="img_outline">
      <img src="" alt="" />
    </div>
    <div class="text_outline">
      <div id="title">
        <p>作品名稱：</p>
        <p>水果大雜燴</p>
      </div>
      <div id="text">
        <p>內容：</p>
        <p>
          好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕好吃蛋糕
        </p>
      </div>
      <div id="count">
        <p>票數：</p>
        <p>123</p>
      </div>
    </div>
    <div class="switch_button">
      <switchButton :title="thistitle" style="lineheight: 27px"></switchButton>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import switchButton from "./switch_button";
export default {
  name: "modify_vote_cake_component",
  props: ["thistitle"],
  data() {
    return {};
  },
  methods: {},
  components: {
    switchButton,
  },
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
* {
  box-sizing: border-box;
}
.outline {
  display: flex;
  padding: 10px;
  width: 775px;
  height: 200px;
  background: #f0d5ce;
  border-radius: 5px;
  justify-content: space-between;
  align-items: space-between;
  .img_outline {
    flex: 2.5;
    width: 100%;
    background: lightcoral;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .text_outline {
    flex: 7;
    height: 100%;
    padding: 0 10px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    > div {
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 4fr;
      p {
        margin: 0;
      }
    }
    #title {
      font-size: 20px;
      font-weight: 600;
      white-space: nowrap;
    }
    #text {
      flex: 1;
    }
  }
  .switch_button {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    white-space: nowrap;
  }
}
</style>