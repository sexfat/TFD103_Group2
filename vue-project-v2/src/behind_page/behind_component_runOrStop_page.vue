<template>
 <section id="right_section">
        <div class="title">
          <h1>活動內容管理</h1>
          <searchBar ></searchBar>
        </div>
        <div class="cake">
          <div id="new_event">
            <h1>舉辦新活動</h1>
            <font-awesome-icon icon="fa-solid fa-square-plus" id="plus_new_event" @click="newEvent" />
          </div>
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
  methods: {
    newEvent(){
      this.$emit("runEvent")
    }
  },
  mounted(){
      $("#runOrStop").siblings().removeClass("target");
    $("#runOrStop").addClass("target");
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
  padding:70px 50px;
  .title {
    display: flex;
    justify-content: space-between;
  }
}
#new_event{
  width:775px;
  height:250px;
  padding:20px;
  background: #f7dcdc;
  border-radius:5px;
  position:relative;
  display:flex;
  align-items:center;
  h1{
    font-size:24px;
    color:#515151;
  }
  #plus_new_event{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size:150px;
    color:white;
    cursor: pointer;
  }
}
</style>