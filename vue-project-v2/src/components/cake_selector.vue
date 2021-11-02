<template>
  <div id="treat">
    <div id="select_ingredients">
      <div id="select_outline">
        <div class="select">
          <span>糕體：</span>
          <div class="selected">
            <div class="checkbox" v-for="(cakebody, index) in total_cakebodys" :key="index">
              <span >
                <input
                  type="checkbox"
                  v-model="choose_total"
                  :value="cakebody"
                  :id="cakebody"
                />{{ cakebody }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="select">
          <span>水果：</span>
          <div class="selected">
            <div class="checkbox" v-for="(ingredient, index) in total_ingredients" :key="index">
              <span >
                <input
                  type="checkbox"
                  v-model="choose_total"
                  :value="ingredient"
                  :id="ingredient"
                />{{ ingredient }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="select">
          <span>裝飾：</span>
          <div class="selected">
            <div class="checkbox" v-for="(decoration, index) in total_decorations" :key="index">
              <span >
                <input
                  type="checkbox"
                  v-model="choose_total"
                  :value="decoration"
                  :id="decoration"
                />{{ decoration }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div id="choose_label">
        <label
          v-for="(choose, index) in choose_total"
          :key="index"
          :for="choose"
          >{{ choose }} <i class="fa-solid fa-xmark"></i
        ></label>
      </div>
      <button class="clearall">清空選項</button>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "cake_selector",
  props: ["total_cakebodys", "total_ingredients", "total_decorations"], //上層屬性用這三個
  data() {
    return {
      choose_total: [],
    };
  },
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
* {
  box-sizing: border-box;
}
label {
  margin: 5px;
  line-height: 36px;
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
  vertical-align: sub;
  // top: 4px;
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
  width: 80px;
  line-height: 30px;
}
button {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 100px;
  height: 30px;
  background-color: #515151;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
#choose_label {
  width: 80%;
}
.selected {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  width:100%;
}
.checkbox {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>