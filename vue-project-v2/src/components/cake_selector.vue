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
          ><span>{{ choose }} <font-awesome-icon icon="fa-solid fa-xmark" /></span></label>
      </div>
      <button class="clearall" id='send'>確認送出</button>
      <button class="clearall" id='clear'>清空選項</button>
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
  padding: 5px;
  background: burlywood;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  span{
    display:flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
  }
  .fa-xmark{
    font-size:16px;
  }
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
  padding: 90px 60px 40px 60px;
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
  font-size: 18px;
}
.select>span:first-child {
  position: relative;
  width: 80px;
  line-height: 30px;
}
button {
  position: absolute;
  
  // transform: translateY(-50%);
  width: 100px;
  height: 30px;
  background-color: #515151;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
#clear{
  right: 180px;
  top: 40px;
  background: transparent;
  color:black;
}
#send{
right: 40px;
  top: 40px;
}
#choose_label {
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(50px,130px));
  // width:80%
}
.selected {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
  width:100%;
}
.checkbox {
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
}
@media all and (max-width:576px){
  #choose_label{
    justify-content: space-between;
  }
  .selected{
    grid-template-columns:1fr 1fr;
  }
  .select{
    flex-direction: column;
  }
  #treat{
    padding:90px 60px 40px 60px;
  }
}
</style>