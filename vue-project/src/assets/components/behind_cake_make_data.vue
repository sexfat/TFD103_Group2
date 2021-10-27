<template>
  <div class="outline">
    <div class="img_outline">
      <img src="../images/cho_cake.jpg" alt="" />
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
        <switchButton title="狀態"></switchButton>
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
  name: "member_data",
  methods: {},
  components: {
    switchButton,
  },
  methods: {
    open: function (e) {
      console.log($(e.target).parents(".outline").siblings());
      $(e.target).parents(".outline").siblings().addClass("close");
      $(e.target).parents(".outline").toggleClass("close");
    },
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
  width: 1000px;
  height: 180px;
  padding: 20px;
  background: #f7dcdc;
  border-radius: 5px;
  transition: 0.3s;
  .img_outline {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
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
  line-height: 30px;
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
      transform: rotate(0deg);
    }
  }
  .button_downsite {
    display: none;
  }
}
</style>