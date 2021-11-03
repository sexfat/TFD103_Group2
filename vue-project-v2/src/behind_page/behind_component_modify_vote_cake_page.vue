<template>
 <section id="right_section">
        <div class="title">
          <h1>修改參賽作品</h1>
          <searchBar></searchBar>
        </div>
        <div class="cake">
          <div id="confirm" v-bind:class="{open:confirmCase}">
         <div class="confirm_outline">
        <h1>確定下架該貼文?</h1>
        <select name="" id="reason">
            <option value="">不雅文字</option>
            <option value="">不雅照片</option>
        </select>
        <div class="check">
            <button class="true" id="confirm_yes"  @click="yes">確認</button>
            <button class="false1" id="confirm_no" @click="cancel">取消</button>
        </div>
         <!-- @click="yes(index)"@click="cancel(index)" -->
    </div>
    </div>  
            <div class="outline" v-for="(data,index) in data" :key="index">
    <span class="switch_button" @click="change(index)">
    <label for="" style="margin-right:3px;">狀態</label>
    <div class="switch" id="outline" :class="{'-on':data.status}">
    <span class="circle" id="circle" :class="{'-on':data.status}"></span>
    </div>
    <!--按鈕開關-->
</span>

    <div class="img_outline">
      <img src="" alt="" />
    </div>
    <div class="text_outline">
      <div id="title">
        <p>作品名稱：</p>
        <p>{{data.name}}</p>
      </div>
      <div id="text">
        <p>內容：</p>
        <p>
          {{data.text}}
        </p>
      </div>
      <div id="count">
        <p>票數：</p>
        <p>{{data.vote}}</p>
      </div>
    </div>
  </div>
       </div>
      </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import modifyCake from "../components/modify_vote_cake";
export default {
  name: "modifyVoteCake",
  components: {
    behindHeader,
    searchBar,
    modifyCake,
  },
  data() {
    return {
      showWhat: [],
      confirmCase:0,
    };
  },
  methods: {
    change(index){
        this.data[index].status = this.data[index].status?0:1;
        if(this.data[index].status == 0){
          this.confirmCase = 1;
        };
          return index;
    },
    cancel(){
          this.confirmCase = 0
      },
      yes(){
          this.confirmCase = 0
      },
  },
  computed:{
    data(){
      return this.$store.state.modify_vote
    }
  },
  mounted(){
    $("#modifyVoteCake").siblings().removeClass("target")
      $("#modifyVoteCake").addClass("target")
  }
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
#right_section{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .cake{
        display:grid;
        grid-template-columns: 1fr;
        gap:30px;
    }
    .title{
        width:775px;
        margin-bottom:50px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        h1{
            font-size:36px;
            font-weight:400;
        }
    }
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
  position: relative;
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
    padding-left: 10px;
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
      margin-top:15px;
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
.switch_button{
  position:absolute;
  right:15px;
  top:8px;
}
.switch_button{
    display: flex;
    align-items: center;
    // justify-content: space-evenly;
  }
.switch {
margin-left: 5px;
width: 40px;
height: 25px;
border-radius: 10px;
display: flex;
align-items: center;
border-radius: 20px;
background-color: #454545;
position: relative;
cursor: pointer;
    .circle {
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background-color: white;
        display: inline-block;
        position: relative;
        left: 2px;
        // left: 14px;
        transition:.5s;
    }
}
.circle.-on{
    left: 18px;
    transition: .5s;
}
.switch.-on{
    
    transition: .5s;
    background-color: green;
}
// 確認框
#confirm {
  width: calc(100vw - 280px);
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 280px;
  top: 0px;
  display: none;
  justify-content: center;
  align-items: center;
}
#confirm.open {
  display: flex;
  z-index:2;
}
.confirm_outline {
  width: 570px;
  height: 300px;
  border-radius: 5px;
  background: #efe6e4;
  display: flex;
  flex-direction: column;
  // border:1px solid red;
  h1 {
    text-align: center;
    color: #515151;
  }
  div {
    display: flex;
    justify-content: center;
    button {
      width: 250px;
      height: 75px;
      margin: 60px 10px;
      border: none;
      border-radius: 5px;
      box-shadow: $shadow;
      font-size: 24px;
      cursor: pointer;
      color: #515151;
      &:active {
        box-shadow: inset $shadow;
      }
    }
    button:nth-child(1) {
      background: #dfb9b0;
    }
    button:nth-child(2) {
      background: #f7edd4;
    }
  }
}
#reason{
  width:50%;
  margin:0 auto;
  font-size:24px;
}
</style>