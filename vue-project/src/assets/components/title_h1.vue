<template>
    <div class="title_h1">
        <span></span>
        <img src="../images/eggBeater.png" alt="">
        <h1>{{title}}</h1>
        <img src="../images/eggBeater.png" alt="">
    </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "title_h1",
  props: ["title"], //上層屬性用這三個
  data() {
    return {
    //   title:123,
    };
  },
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
.title_h1 {
    display: inline-block;
    position: relative;
    h1 {
        display: inline-block;
        font-size: 36px;
        color: #515151;
    }
    span {
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background-color: #dfb9b0;
    }
    img {
        width: 58px;
        height: 58px;
        vertical-align: middle;
        position: relative;
        transform: translateY(-10px);
    }
}

</style>