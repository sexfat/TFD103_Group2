<template>
	    <button class="button_h1"><img src="../images/button_butter.png">進入投票<img src="../images/button_butter.png"><span>gogogo</span></button>
</template>
<script>
// import "../font/fff.less";
import $ from 'jquery'
export default {
    name:"button_h1",
}
</script>
<style scoped lang="scss">
$shadow:4px 4px 5px 0 rgba(0, 0, 0, 0.3);
*{
    box-sizing: border-box;
}
.button_h1 {
    font-family: "EB Garamond";
    width: 250px;
    height: 75px;
    border-radius: 5px;
    background-color: #dfb9b0;
    color: #515151;
    font-size: 24px;
    border: none;
    box-shadow: $shadow;
    transition: 0.2s;
    
    img{
        width:30px;
        height:30px;
        position:relative;
        transform: translateY(5px);
    }
    > span {
        display: block;
        font-size: 14px;
    }
    &:hover {
        background-color: #f4e9c9;
        cursor: pointer;
        transform: translateY(-5px);
    }
}

</style>