<template>
  <!-- <buttontest titleText="自訂TITLE"></buttontest> -->
  <!-- <cardVote></cardVote> -->
  <div>
    <!-- <router-view></router-view> -->
    <buttontest v-for="asd in 3"></buttontest>
    <card-vote v-for="asd in 3"></card-vote>
    
  </div>
</template>
<script>
import buttontest from "./assets/components/button_h1.vue";
import cardVote from "./assets/components/card_voting.vue";
import $ from "jquery";
export default {
  name: "test",
  components: {
    buttontest,
    cardVote,
  },
};
</script>