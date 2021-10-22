<template>
  <!-- <buttontest titleText="自訂TITLE"></buttontest> -->
  <div>
  <!-- <cardVote></cardVote> -->
    <!-- <router-view> -->
    <!-- </router-view> -->

    <!-- <buttontest v-for="asd in 3"></buttontest> -->
    <!-- <card-vote v-for="asd in 3"></card-vote> -->
    <!-- <pageSelector></pageSelector> -->
    <!-- <saleCard></saleCard>
    <searchBar></searchBar> -->
    <!-- <cakeSelector :total_cakebodys="totalCake"></cakeSelector> -->
    <!-- <titleh1 title="自訂文字"></titleh1> -->
    <watchmore title="ASSSD"></watchmore>
  </div>
</template>
<script>
<<<<<<< HEAD
import $ from "jquery";
export default {
  // methods: {
  //   add(){
  //     $("h1").hide();
  //   }
  // },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
=======
import buttontest from "./assets/components/button_h1.vue";
import cardVote from "./assets/components/card_voting.vue";
import pageSelector from "./assets/components/page_selector.vue";
import saleCard from "./assets/components/sale_card";
import searchBar from "./assets/components/search_bar.vue";
import cakeSelector from "./assets/components/cake_selector.vue";
import titleh1 from "./assets/components/title_h1.vue";
import watchmore from "./assets/components/watchmore.vue";

import $ from "jquery";
export default {
  name: "test",
  components: {
    buttontest,
    cardVote,
    pageSelector,
    saleCard,
    searchBar,
    cakeSelector,
    titleh1,
    watchmore,

  },
  data(){
    return{
      totalCake:["蛋糕","你好"]

>>>>>>> dev
    }
  }
};
</script>
<<<<<<< HEAD

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
=======
<style scoped lang="scss">
@import "./assets/style/var.scss";
*{
  font-family: 'EB Garamond', serif;
>>>>>>> dev
}
</style>