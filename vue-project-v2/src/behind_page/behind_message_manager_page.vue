<template>
  <div>
    <behind-header thistitle="客服回覆" style="zIndex:2"></behind-header>
    <main>
      <section class="left_site">
        <div class="member_outline" v-for="(test,index) in 5" :key="index">
          <div class="img_outline">
            <img src="" alt="">
          </div>
          <h1>使用者1</h1>
        </div>
      </section>
      <section class="middle_site">
        <div class="who">
          <img src="" alt="">
          <div class="status">
            <p>使用者1</p>
            <p>權限正常</p>
          </div>
        </div>
        <button>噤聲</button>
        <button>封鎖</button>
        <button>恢復權限</button>
      </section>
      <section class="right_site">
        <div class="first_line">
        <p>文字客服</p>
        <button>封存問題</button>
        </div>
        <div class="contact">

        </div>
        <div class="answer">
          <input type="text" placeholder="回答問題...">
          <button>發送</button>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";

export default {
  name: "message_manager",
  components: {
    behindHeader,
    searchBar,
  },
  data() {
    return {
      showWhat: 'runOrStop',
    };
  },
  methods: {},
  mounted(){
      $("#request").siblings().removeClass("target");
    $("#request").addClass("target");
  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
main{
  display:grid;
  grid-template-columns: 1fr 1fr 2fr;
}
.left_site{
  position:relative;
  top:-20px;
  background: #F0D5CE;
  .member_outline{
    width:100%;
    height:120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    .img_outline{
      width:55px;
      height:55px;
      margin-right:10px;
      img{
        width: 100%;
        height:100%;
        object-fit: cover;
      }
      
    }
    &:after{
      content:'';
      position:absolute;
      width:80%;
      left:50%;
      transform: translate(-50%);
      bottom:0;
      height:1px;
      background:black;
    }
  }
  .member_outline:first-child{
    margin-top:100px;
    &:before{
      content:'';
      position:absolute;
      width:80%;
      left:50%;
      transform: translate(-50%);
      top:0;
      height:1px;
      background:black;
    }
  }
}
.middle_site{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top:80px;
  .who{
    display:flex;
    img{
      width:90px;
      height:90px;
      object-fit: cover;
    }
    .status{
      display:flex;
      flex-direction: column;
      justify-content: center;
      // align-items: flex-end;
      p{
        margin:0;
        font-size:24px;
      }
      p:nth-child(2){
        margin-top:10px;
        font-size:12px;
        color:#5A9308;
        position:relative;
        align-self:center;
        &:before{
          content:'';
          width:10px;
          height:10px;
          background:#5A9308 ;
          border-radius: 50%;
          position:absolute;
          left:-15px;
          top:50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  button{
    font-size:20px;
    margin-top:10px;
    width:180px;
    height:40px;
    border-radius:5px;
    border:none;
    background:#9F746B ;
    box-shadow: $shadow;
    color:white;
    cursor: pointer;
    &:active{
      box-shadow: inset $shadow;
    }
  }
  button:nth-child(4){
    background:#454545 ;
  }
}
.right_site{
  position:relative;
  display: flex;
  flex-direction: column;
  background:#F4E9C9;
  top:-20px;
  height:100%;
  padding:80px 20px;
  .first_line{
    // width:570px;
    justify-content: space-between;
    display:flex;
    p{
      font-size:24px;
    }
    button{
      font-size:20px;
      width:100px;
      height:40px;
      background: #454545;
      box-shadow: $shadow;
      color:white;
      cursor: pointer;
      border:none;
      border-radius:5px;
      &:active{
        box-shadow: inset $shadow;
      }
    }
  }
  .contact{
    height:550px;
    overflow-y:auto;
    background: white;
    color:black;
  }
  .answer{
    display:flex;
    height:60px;
    margin-top:60px;
    input{
      flex:1;
      padding:20px;
      border:none;
      background: white;
      border-radius:5px 0 0 5px;
      font-size:20px;
    }
    button{
      width:150px;
      border-radius: 0 5px 5px 0;
      background:#DFB9B0 ;
      font-size:20px;
      cursor: pointer;
      border:none;
      &:active{
        box-shadow: inset $shadow;
      }
    }
  }
}
</style>