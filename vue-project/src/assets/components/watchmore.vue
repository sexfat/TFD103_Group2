<template>
	<button class="watchmore">{{title}}</button>
</template>
<script>
import $ from 'jquery'
export default {
  name:"watchmore",
  props:["title"],
}
</script>
<style scoped lang="scss">
    @import "../style/var.scss";
*{
    box-sizing: border-box;
}
.watchmore{
    width:180px;
    height:60px;
    border-radius: 5px;
    border:none;
    cursor:pointer;
    font-size: 24px;
    background:#515151;
    color:white;
    box-shadow: $shadow;
    &:hover{
        color:#515151;
        background:white;
    }
}
</style>