<template>
<span class="switch_button" @click="myfunc">
    <label for="">狀態</label>
    <div class="switch">
    <span class="circle"></span>
    </div>
    <!--按鈕開關-->
</span>
</template>
<script>
import $ from "jquery";
export default {
name: "employee",
methods: {
    myfunc:　function(){
        $('.circle').toggleClass('-on');
        $('.switch').toggleClass('-on');
    },
},
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
* {
box-sizing: border-box;
}
.switch_button {
display: flex;
align-items: center;
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
