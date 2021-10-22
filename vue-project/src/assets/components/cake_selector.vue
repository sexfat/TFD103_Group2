<template>
<div id="treat">
<div id="select_ingredients">
    <div id="select_outline">
    <div class="select">
        <span>糕體：</span>
        <span v-for="cakebody in total_cakebodys"
        ><input
            type="checkbox"
            v-model="choose_total"
            :value="cakebody"
            :id="cakebody"
        >{{ cakebody }}</span
        >
    </div>
    <div class="select">
        <span>水果：</span>
        <span v-for="ingredient in total_ingredients"
        ><input
            type="checkbox"
            v-model="choose_total"
            :value="ingredient"
            :id="ingredient"
        >{{ ingredient }}</span
        >
    </div>
    <div class="select">
        <span>裝飾：</span>
        <span v-for="decoration in total_decorations"
        ><input
            type="checkbox"
            v-model="choose_total"
            :value="decoration"
            :id="decoration"
        >{{ decoration }}</span
        >
    </div>
    </div>
    <br >
    <div id="choose_label">
    <label v-for="choose in choose_total" :for="choose"
        >{{ choose }} <i class="fa-solid fa-xmark"></i></label>
    </div>
    <button class="clearall">ZXS</button>
    </div>
</div>
</template>
<script>
import $ from "jquery";
export default {
  name: "button_h1",
  props: ["total_cakebodys","total_ingredients","total_decorations"], //上層屬性用這三個
  data() {
    return {
      choose_total: [],
      // total_cakebodys: [
      //   "原味鮮奶油",
      //   "巧克力奶油",
      //   "水果鮮奶油",
      //   "綜合口味",
      //   "其他糕體",
      // ],
      // total_ingredients: [
      //   "草莓",
      //   "藍莓",
      //   "櫻桃",
      //   "橘子",
      //   "檸檬",
      //   "奇異果",
      //   "其他水果",
      // ],
      // total_decorations: [
      //   "圓形立牌",
      //   "生日立牌",
      //   "奶油",
      //   "葉子",
      //   "迷迭香",
      //   "薄荷",
      //   "其他裝飾",
      // ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
* {
  box-sizing: border-box;
}
label {
  margin: 5px;
  line-height:36px;
  padding: 5px 15px;
  background: burlywood;
  border-radius: 10px;
  cursor: pointer;
}
input {
  margin: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: inset -1px -1px 3px rgba(0, 0, 0, 0.8);
  position: relative;
  top: 4px;
}
#treat {
  background-color: #f7edd4;
  border-radius: 5px;
  padding: 40px 60px;
  position: relative;
}
.select {
  display: flex;
  margin-bottom: 25px;
}
.select:last-child {
  margin-bottom: 35px;
}
.select span {
  width: 120px;
  font-size: 18px;
}
.select span:first-child {
  position: relative;
  top: 4px;
  width: 80px;
}
button {
  position: absolute;
  right: 60px;
  bottom: 40px;
  width: 100px;
  height: 30px;
  background-color: #515151;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
#choose_label{
    width:80%;
}
</style>