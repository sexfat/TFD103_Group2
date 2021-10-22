<template>
	<ul class="page_select">
        <li><a href="#"><i class="fa-solid fa-angles-left"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-angle-left"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-1"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-2"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-3"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-4"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-5"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-angle-right"></i></a></li>
        <li><a href="#"><i class="fa-solid fa-angles-right"></i></a></li>
    </ul>
</template>
<script>
import $ from 'jquery'
export default {
  name:"button_h1",
  props:["title"],
}
</script>
<style scoped lang="scss">
@import "../style/var.scss";

.page_select{
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
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
</style>