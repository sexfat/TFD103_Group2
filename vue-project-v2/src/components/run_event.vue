<template>
  <div>
    <div class="outline">
      <div class="img_outline">
        <img src="../assets/images/cho_cake.jpg" alt="" />
      </div>
      <div class="text_outline">
        <div class="content">
          <div class="text_content">
            <p>活動主題：</p>
            <p>老母辛苦了</p>
          </div>
          <div class="text_content">
            <p>活動內容：</p>
            <p>大家一起做蛋糕，看看老媽多辛勞大家一起做蛋糕，看看老媽多辛勞大家一起做蛋糕，看看老媽多辛勞大家一起做蛋糕，看看老媽多辛勞</p>
          </div>
          <div class="text_content">
            <p>活動時程：</p>
            <p>2022/12/01</p>
            <p>~</p>
            <p>2023/01/30</p>
          </div>
        </div>
        <div class="progress">
          <h1>進行中</h1>
          <div class="button_zone">
        <div>
          <button>修改活動</button>
          <button>結束活動</button>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "runOrStopEvent",
  methods: {},
  components: {},
  props: ["title", "author", "text"],
  mounted(){
      $("#runOrStop").siblings().removeClass("target")
      $("#runOrStop").addClass("target")
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
* {
  box-sizing: border-box;
}
.outline {
  display: flex;
  width: 775px;
  height: 250px;
  padding: 20px;
  background: #f7dcdc;
  border-radius: 5px;
  // transform:scale(2);
  .img_outline {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text_outline {
    flex: 3;
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    align-items: flex-start;
    .content {
      flex: 1;
      width:100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text_content {
        display: flex;
        align-items: flex-start;
        margin-bottom:10px;
        
        p {
          margin: 0 8px 0 0;
          font-size: 18px;
          color:#515151;
        }
        p:nth-child(1){
          white-space: nowrap;
          vertical-align: top;
        }
      }
    }
    .progress {
      flex: 1;
      display: flex;
      align-items: flex-end;
      width:100%;
      justify-content: space-between;
      h1 {
        margin: 0;
        color:#515151;
      }
    }
  }
  .button_zone {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    button{
      width:100px;
      height:25px;
      font-size:16px;
      line-height:16px;
        border-radius: 5px;
        background:#F4E9C9 ;
        cursor: pointer;
        color:#515151;
        border:none;
        padding:5px;
        margin:0 5px;
        &:active{
            box-shadow: inset $shadow;
        }
    }
  }
}
</style>