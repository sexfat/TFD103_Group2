<template>
<span class="switch_button" @click="myfunc">
    <label for="" style="margin-right:3px;">{{title}}</label>
    <div class="switch" id="outline">
    <span class="circle" id="circle"></span>
    </div>
    <!--按鈕開關-->
</span>
</template>
<script>
import $ from "jquery";
export default {
name: "switch_button",
methods: {
    myfunc:　function(e){
        if($(e.target).attr("id") =="outline"){
            $(e.target).toggleClass("-on");
            $(e.target).children().toggleClass("-on");
        };
        if($(e.target).attr("id") == "circle"){
            $(e.target).parent().toggleClass("-on");
            $(e.target).toggleClass("-on");
        }
    },
},
props:['title'],
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
* {
box-sizing: border-box;
}
.switch_button{
    display: flex;
    align-items: center;
    // justify-content: space-evenly;
  }
.switch {
width: 40px;
height: 25px;
border-radius: 10px;
display: flex;
align-items: center;
border-radius: 20px;
background-color: #454545;
position: relative;
cursor: pointer;
    .circle {
        width: 20px;
        height: 20px;
        border-radius: 100px;
        background-color: white;
        display: inline-block;
        position: relative;
        left: 2px;
        // left: 14px;
        transition:.5s;
    }
}
.circle.-on{
    left: 18px;
    transition: .5s;
}
.switch.-on{
    
    transition: .5s;
    background-color: green;
}
</style>
