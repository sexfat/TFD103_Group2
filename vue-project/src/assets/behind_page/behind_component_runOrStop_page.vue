<template>
 <section id="right_section">
        <div class="title">
          <h1>活動內容管理</h1>
          <searchBar></searchBar>
        </div>
        <div class="cake">
          <run-event v-for="(test,index) in 5" :key="index"></run-event>
       </div>
      </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import runEvent from "../components/run_event";
export default {
  name: "runOrStop",
  components: {
    behindHeader,
    searchBar,
    runEvent,
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