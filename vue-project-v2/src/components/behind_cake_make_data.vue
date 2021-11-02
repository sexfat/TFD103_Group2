<template>
  <div class="outline close">
    <div class="img_outline">
      <img src="../assets/images/cho_cake.jpg" alt="" />
      <button>修改圖片</button>
    </div>

    <div class="text_outline">
      <div class="left_text">
        <div>
          <p>名稱：</p>
          <p>草莓</p>
        </div>
        <div>
          <p>ID：</p>
          <p>654153</p>
        </div>
        <div>
          <p>價格：</p>
          <p>20/顆</p>
        </div>
      </div>
      <div class="right_text">
        <div>
          <p>種類：</p>
          <select name="" id="">
            <option value="">水果</option>
          </select>
        </div>
        <div id="text_area">
          <p>描述：</p>
          <textarea name="" id="" cols="30" rows="6"></textarea>
        </div>
      </div>
    </div>
    <div class="button_outline">
      <div class="button_upsite">
        <switchButton title="狀態" style="margin-right:33px;"></switchButton>
        <font-awesome-icon
          icon="fa-solid fa-sort-down"
          class="open_button"
          @click="open"
        />
      </div>
      <div class="button_downsite">
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
  name: "behind_cake_make_data",
  methods: {},
  components: {
    switchButton,
  },
  methods: {
    open: function (e) {
      // console.log($(e.target).parents(".outline").siblings());
      $(e.target).parents(".outline").siblings().addClass("close");
      $(e.target).parents(".outline").toggleClass("close");
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
* {
  box-sizing: border-box;
}
.outline {
  display: flex;
  width: 1000px;
  height: 180px;
  padding: 20px;
  background: #f7dcdc;
  position:relative;
  border-radius: 5px;
  transition: 0.3s;
  .img_outline {
    position:relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    button{
      position:absolute;
      right:0;
      bottom:0;
      width:100px;
      height:40px;
      font-size: 20px;
      box-shadow: $shadow;
      cursor:pointer;
      background: #515151;
      color:white;
      border-radius:5px;
      &:active{
        box-shadow: inset $shadow;
      }
    }
  }
}
select{
  background: white;
}
.text_outline {
  flex: 4;
  display: flex;
  justify-content: space-between;
  .right_text,
  .left_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      display: grid;
      grid-template-columns: 1fr 4fr;
      p {
        margin: 0;
        padding-left: 10px;
      }
      textarea {
        resize: none;
        width: 100%;
        height: 100%;
        background: white;
      }
    }
  }
  .left_text {
    padding-left: 20px;
  }
}
.button_outline {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .button_upsite {
    display: flex;
    justify-content: space-around;
    .open_button {
      cursor: pointer;
      transform: rotate(180deg);
      transition: 0.3s;
    //   margin-top:10px;
    position:absolute;
    right:20px;
    font-size:24px;
    }
  }
  .button_downsite {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    button {
      width: 100px;
      height: 20px;
      margin-top: 10px;
      border-radius: 20px;
      border: none;
      background: #454545;
      color: white;
      cursor: pointer;
      &:active {
        box-shadow: inset $shadow;
      }
    }
  }
}
.outline.close {
  height: 50px;
  overflow: hidden;
  line-height: 32px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  .img_outline {
    display: none;
  }
  .text_outline {
    #text_area {
      display: none;
    }
  }
  .button_upsite {
    justify-content: space-around;
    align-items: center;
    .open_button {
        margin-bottom:10px;
      transform: rotate(0deg);
    }
  }
  .button_downsite {
    display: none;
  }
}
</style>