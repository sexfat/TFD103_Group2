<template>
  <section id="bottom_section">
    <div class="title">
      <h1>創意蛋糕</h1>
      <searchBar></searchBar>
    </div>
    <div class="cake">
      <cake-data v-for="(test,index) in 5" :key="index"></cake-data>
    </div>
  </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import cakeData from "../components/behind_cake_data";
export default {
  name: "upload_vote",
  components: {
    behindHeader,
    searchBar,
    cakeData,
  },
  data() {
    return {
      showWhat: [],
    };
  },
  methods: {},
  mounted() {
    $("#ideaCake").siblings().removeClass("target");
    $("#ideaCake").addClass("target");
  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
#bottom_section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 1025px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        margin:0;
      font-size: 36px;
      font-weight: 400;
    }
  }
  .cake {
    // width:903px;
    display: grid;
    gap: 30px;
  }
}
</style>