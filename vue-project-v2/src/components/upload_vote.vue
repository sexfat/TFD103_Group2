<template>
    <div>
        <div class="outline">
            <div class="img_outline">
                <img src="../assets/images/cho_cake.jpg" alt="">
            </div>
            
            <div class="text_outline">
                <h1 :title="title">蛋糕：{{title}}</h1>
                <p :author="author" id="author">創作者：{{author}}</p>
                <p id="description" :text="text">創作理念：{{text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
import switchButton from "./switch_button"
export default {
  name: "upload_vote",
  methods: {},
  components:{
      
  },
  props:['title','author','text'],
  
  
};
</script>
<style scoped lang="scss">
@import "../assets/style/var.scss";
*{
    box-sizing: border-box;
}
.outline{
    display:flex;
    width:775px;
    height:250px;
    padding:20px;
    background: #F7DCDC;
    border-radius:5px;
    // transform:scale(2);
    .img_outline{
        flex:.5;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .text_outline{
        flex:1;
        // display:flex;
        margin-left:20px;
        flex-direction: column;
        justify-content: space-between;
        h1{
            margin-top:0;
            font-size:20px ;
            color:#515151;
        }
        #author{
            font-size:12px;
            color:#515151;
        }
        #description{
            font-size:16px;
            color:#515151;
            font-weight: 700;
        }
    }
    
}

</style>