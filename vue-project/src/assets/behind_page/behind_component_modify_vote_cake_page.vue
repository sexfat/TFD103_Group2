<template>
 <section id="right_section">
        <div class="title">
          <h1>修改人氣票選的貼文</h1>
          <searchBar></searchBar>
        </div>
        <div class="cake">
            <modify-cake thistitle="狀態" v-for="(test,index) in 5" :key="index"></modify-cake>
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
    };
  },
  methods: {},
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

</style>