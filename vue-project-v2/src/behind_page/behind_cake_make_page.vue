<template>
  <div>
    <behind-header thistitle="蛋糕製作管理"></behind-header>
      <main>
      <section id="search_site">
        <search-bar></search-bar>
        <search-bar></search-bar>
      </section>
      <section class="cake_data">
        <cake-data v-for="(test,index) in 5" :key="index"></cake-data>
      </section>
      </main>
    </div>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import cakeData from '../components/behind_cake_make_data';

export default {
  name: "vote_manager",
  components: {
    behindHeader,
    searchBar,
    cakeData,
    
  },
  data() {
    return {
      showWhat: '',
    };
  },
  methods: {},
  mounted(){
     $("#cake").siblings().removeClass("target");
    $("#cake").addClass("target");
  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
main{
  margin:0 auto;
  margin-top:80px;
  width:1000px;
  display:flex;
  flex-direction: column;
}
#search_site{
  display:flex;
  justify-content: space-between;
  margin-bottom:30px;
}
  .cake_data{
    display:grid;
    grid-template-columns: 1fr;
    gap:30px;
  }

</style>