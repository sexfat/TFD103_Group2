<template>
	<ul class="page_select">
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angles-left" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angle-left" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-1" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-2" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-3" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-4" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-5" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angle-right" class="number" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angles-right" class="number" /></a></li>
    </ul>
</template>
<script>
import $ from 'jquery'
export default {
  name:"page_selector",
  props:["title"],
}
</script>
<style scoped lang="scss">
*{
    box-sizing: border-box;
}
@import "../assets/style/var.scss";

.page_select{
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    width:100%;
    li{
        margin:0 8px;
        a{  
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            width:40px;
            height:40px;
            text-decoration: none;
            color:#515151;
            background-color: white;
            border-radius: 50%;
            &:hover{
                background-color: black;
                color:white;
            }
        }
    }
}
@media (max-width:576px){
    .page_select{
        justify-content: space-between;
        li{
            margin:auto;
        }
    }
}
</style>