<template>
<span class="switch_button" @click="change">
    <label for="" style="margin-right:3px;">{{title}}</label>
    <div class="switch" id="outline" :class="{'-on':switchCase}">
    <span class="circle" id="circle" :class="{'-on':switchCase}"></span>
    </div>
    <!--按鈕開關-->
</span>
</template>
<script>
import $ from "jquery";
export default {
name: "switch_button",
data(){
    return{
        switchCase:test,
    }
},
props:["index"],
methods: {
    change(){
        this.switchCase = this.switchCase? 0:1;
    },
},
props:['title',],
computed:{
    test(){
        return  this.$store.state.member_status[this.index]
    }
},
mounted(){
   this.switchCase = this.$store.state.member_status[this.index]
},
watch:{
    
},
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
* {
box-sizing: border-box;
}
.switch_button{
    display: flex;
    align-items: center;
    // justify-content: space-evenly;
  }
.switch {
margin-left: 5px;
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
