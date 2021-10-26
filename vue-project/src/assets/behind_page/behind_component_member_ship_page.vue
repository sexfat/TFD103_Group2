<template>
 <section id="right_section">
        <div class="title">
          <h1>會員資料</h1>
          <searchBar></searchBar>
        </div>
        <div class="cake">
          <member v-for="(test,index) in 5" :key="index"></member>
       </div>
      </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import member from "../components/member_data";
export default {
  name: "membership",
  components: {
    behindHeader,
    searchBar,
    member
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted(){
      $("#member_ship_manager").siblings().removeClass("target")
      $("#member_ship_manager").addClass("target")
  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
.title{
    width:775px;
    display:flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    h1{
        font-size:36px;
        font-weight:400;
    }
}
.cake{
    display:grid;
    gap:30px;
}
#right_section {
  padding:70px 100px;
  .title {
    display: flex;
    justify-content: space-between;
  }
}
</style>