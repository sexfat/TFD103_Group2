<template>
	<ul class="page_select">
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angles-left" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angle-left" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-1" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-2" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-3" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-4" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-5" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angle-right" /></a></li>
        <li><a href="#"><font-awesome-icon icon="fa-solid fa-angles-right" /></a></li>
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
@import "../style/var.scss";

.page_select{
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    width:100%;
    li{
        margin:0 8px;
        a{
            font-size: 14px;
            border:1px solid red;
            text-decoration: none;
            color:#515151;
            background-color: white;
            padding:10px 12px;
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