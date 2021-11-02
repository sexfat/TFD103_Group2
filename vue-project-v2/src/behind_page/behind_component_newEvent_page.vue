<template>
  <section id="right_section">
    <div class="title">
      <h1>舉辦新活動</h1>
    </div>
    <div class="top_outline">
      <div class="img_outline">
        <img src="" alt="" />
      </div>
      <div class="text_outline">
        <div>
          <label for="">活動主題：</label>
          <input type="text" />
        </div>
        <div>
          <label for="">活動時間：</label>
          <input type="text" />
        </div>
        <div>
          <label for="">活動內文：</label>
          <textarea name="" id="" cols="30" rows="7"></textarea>
        </div>
      </div>
    </div>
    <div class="button_outline">
      <button>清空</button>
      <button>上傳</button>
    </div>
  </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import runEvent from "../components/run_event";
export default {
  name: "newEvent",
  components: {
    behindHeader,
    searchBar,
    runEvent,
  },
  data() {
    return {
      showWhat: [],
    };
  },
  methods: {},
  mounted() {
    $("#runOrStop").siblings().removeClass("target");
    $("#runOrStop").addClass("target");
  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
.title {
  width: 775px;
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  // flex-direction: column;
  h1 {
    font-size: 36px;
    font-weight: 400;
  }
}
.top_outline {
  width: 775px;
  display: flex;

  .img_outline {
    width: 211px;
    height: 211px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text_outline{
      font-size:24px;
      flex:1;
      display:flex;
      flex-direction: column;
      >div{
          padding-left:20px;
          display: grid;
          grid-template-columns: 1fr 3fr;
          margin-bottom:10px;
      }
  }
}
  .button_outline{
      width:775px;
      display:flex;
      justify-content: flex-end;
      align-items: center;
      button{
          margin-left:20px;
          margin-top:50px;
          width:180px;
          height:60px;
          cursor: pointer;
          font-size:24px;
          border:1px solid gray;
          box-shadow: $shadow;
          border-radius:5px;
          background: transparent;
          &:active{
              box-shadow: inset $shadow;
          }
      }
      button:nth-child(2){
          background: #515151;
          color:white;
      }
  }
</style>