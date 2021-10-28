<template>
  <div id="app">
    <router-view></router-view>
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