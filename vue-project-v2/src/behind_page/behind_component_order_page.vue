<template>
 <section id="right_section">
        <div class="title">
          <h1>訂單查詢</h1>
          <searchBar></searchBar>
        </div>
        <div class="cake">
            <order v-for="(test,index) in 5" :key="index"></order>
       </div>
      </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import order from '../components/order_detail';
export default {
  name: "order_detail",
  components: {
    behindHeader,
    searchBar,
    order,
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted(){
    $("#order").siblings().removeClass("target")
      $("#order").addClass("target")
  }
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