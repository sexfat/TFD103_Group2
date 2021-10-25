<template>
  <div>
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
    <headercom></headercom>
    <!-- <watchmore title="自訂文字"></watchmore> -->
    <!-- <assignPage></assignPage> -->
    <!-- <employee></employee> -->
    <memberData></memberData>
    <!-- <employee></employee> -->
    <!-- <switchButton></switchButton> -->
    <!-- <confirmReason></confirmReason> -->
    <footercom></footercom>
  </div>
</template>
<script>
import buttontest from "./assets/components/button_h1.vue";
import cardVote from "./assets/components/card_voting.vue";
import pageSelector from "./assets/components/page_selector.vue";
import saleCard from "./assets/components/sale_card";
import searchBar from "./assets/components/search_bar.vue";
import cakeSelector from "./assets/components/cake_selector.vue";
import titleh1 from "./assets/components/title_h1.vue";
import watchmore from "./assets/components/watchmore.vue";
import footercom from "./assets/components/footercom.vue";
import headercom from "./assets/components/headercom.vue";

import switchButton from "./assets/components/switch_button.vue";
import employee from "./assets/components/employee.vue";
import memberData from "./assets/components/member_data.vue";
import confirm from "./assets/components/confirm.vue";
import confirmReason from "./assets/components/confirm_reason.vue";
import assignPage from "./assets/page/assign.vue";
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-solid-svg-icons'
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
    assignPage,
    employee,
    memberData,
    switchButton,
    confirm,
    confirmReason,
    footercom,
    headercom,

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