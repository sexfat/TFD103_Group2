<template>
  <div>
    <behind-header thistitle="員工管理"></behind-header>
    <div class="forPosition">
      <section class="first_site">
        <h1>員工資料</h1>
        <search-bar></search-bar>
      </section>
      <div id="employee">
        <employee
          thistitle="狀態"
          v-for="(sss, index) in 5"
          :key="index"
        ></employee>
      </div>
    </div>
  </div>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import employee from "../components/employee";
export default {
  name: "employee_page",
  components: {
    behindHeader,
    searchBar,
    employee,
  },
  mounted(){
    $("#employee").siblings().removeClass("target");
    $("#employee").addClass("target");

  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}

.first_site {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
  margin-top:70px;
}
#employee {
  display: grid;
  gap: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.forPosition {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>