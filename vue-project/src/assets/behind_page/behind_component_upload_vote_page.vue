<template>
 <section id="right_section">
        <div class="title">
          <h1>人氣投票上傳</h1>
          <searchBar></searchBar>
        </div>
        <div class="cake">
          <upload-vote v-for="(test,index) in 10" :key="index" title="無敵大蛋糕" author="王品涵" text="我想睡覺也想吃蛋糕"></upload-vote>
       </div>
      </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import uploadVote from "../components/upload_vote";
export default {
  name: "upload_vote",
  components: {
    behindHeader,
    searchBar,
    uploadVote,
  },
  data() {
    return {
      showWhat: [],
    };
  },
  methods: {},
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