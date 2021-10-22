
<template>
	<div>
    	<p @click="add">asd
        <span>ERT</span>
      </p>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  methods: {
    add(){
      $("p").css("fontSize",50);
    }
  },
}
</script>
<style lang="scss">
@import './assets/style/var.scss';
$maincolor:red;
  p{
    color:$mainColor;
    span{
      color:blue;
    }
  }
</style>