<template>
  <div id="app">
    <router-view></router-view>
  <!-- <buttontest titleText="自訂TITLE"></buttontest> -->
  <!-- <cardVote></cardVote> -->
    <!-- <router-view> -->
    <!-- </router-view> -->

    <!-- <buttontest v-for="asd in 3"></buttontest> -->
    <!-- <card-vote v-for="asd in 3"></card-vote> -->
    <!-- <pageSelector></pageSelector> -->
    <!-- <saleCard></saleCard> -->
    <!-- <searchBar></searchBar> -->
    <!-- <cakeSelector :total_cakebodys="totalCake"></cakeSelector> -->
    <!-- <titleh1 title="自訂文字"></titleh1> -->
    <!-- <watchmore title="ASSSD"></watchmore> -->
    <!-- <headercom></headercom> -->
    <!-- <watchmore title="自訂文字"></watchmore> -->
    <!-- <assignPage></assignPage> -->
    <!-- <employee></employee> -->
    <!-- <memberData></memberData> -->
    <!-- <employee></employee> -->
    <!-- <switchButton></switchButton> -->
    <!-- <confirmReason></confirmReason> -->
    <!-- <footercom></footercom> -->
    <!-- <votePage></votePage> -->
  </div>
</template>
<script>
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import $ from "jquery";
export default {
  name: "AppVue",
  components: {
  },
  mounted(){
    $("body").css({"margin":0,"padding":0,"backgroundColor":"#EFE6E4"})
  },
  data(){
    return{
      show:true,
    }
  }
};

</script>
<style scoped lang="scss">
@import "./assets/style/var.scss";
*{
  font-family: 'EB Garamond', serif;
}
</style>