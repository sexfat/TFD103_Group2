<template>
  <div>
    <behind-header thistitle="會員資料管理" style="zIndex:2"></behind-header>
    <main style="zIndex:1">
      <section id="left_section">
        <!-- <div class="select_option"></div> -->
        <div
          id="upload_votePic"
          class="select_option"
          @click="showWhat = 'votePage'" style="margin-top:75px"
        >
          <h1>上傳參賽蛋糕照片</h1>
        </div>
        <div
          id="member_ship_manager"
          class="select_option"
          @click="showWhat = 'membership'"
        >
          <h1>修查會員資格與權限</h1>
        </div>
        <div id="coupon" class="select_option" @click="showWhat = 'coupon'">
          <h1>給予折扣券</h1>
        </div>
        <div id="order" class="select_option" @click="showWhat = 'order'">
          <h1>修改查詢訂單</h1>
        </div>
      </section>
      <diV id="content">
      <section id="right_section" :is="showWhat">
        
      </section>
      </diV>
    </main>
  </div>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import votePage from './behind_component_upload_vote_page'
import membership from './behind_component_member_ship_page'
import order from './behind_component_order_page'
import coupon from './behind_component_coupon_page'
export default {
  name: "member_manager",
  components: {
    behindHeader,
    searchBar,
    votePage,
    membership,
    order,
    coupon,
  },
  data() {
    return {
      showWhat: 'votePage',
    };
  },
  methods: {},
  mounted(){
    $("#member").siblings().removeClass("target");
    $("#member").addClass("target");

  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
main {
  display: grid;
  grid-template-columns: 1fr 3fr;
  top:-20px;
  position:relative;
}
#left_section{
  background:#F0D5CE;
  .select_option {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    color:#515151;
    cursor: pointer;
  
    &:hover{
      background: #DFB9B0;
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
    &:nth-child(1){
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
  .select_option.target{
    background:#DFB9B0 ;
  }
}
#right_section {
  padding:70px 100px;
  .title {
    display: flex;
    justify-content: space-between;
  }
}
#content{
  display:flex;
  justify-content: center;
  align-items:center;
}

</style>