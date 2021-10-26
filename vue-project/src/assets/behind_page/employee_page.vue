<template>
  <div>
    <behind-header thistitle="員工管理"></behind-header>
    <section class="first_site">
      <h1>員工資料</h1>
      <search-bar></search-bar>
    </section>
    <div id="employee">
      <employee  thistitle="狀態" v-for="(sss,index) in 5" :key="index"></employee>
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
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}

.first_site {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  position:sticky;
  top:350px;
  z-index:99;
}
#employee{
    display:grid;
    gap:30px;
    text-align: center;
    justify-content: center;
    align-items: center;
}
</style>