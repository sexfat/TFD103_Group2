<template>
        <div class="outline close">
            <div class="img_outline">
                <img src="../images/cho_cake.jpg" alt="">
            </div>
            <div class="text_outline">
                <div class="infor">
                    <div class="left_infor">
                        <div class="first">
                            <p>蛋糕ID：</p>
                            <p>002015</p>
                        </div>
                        <div class="second">
                            <p>蛋糕名稱：</p>
                            <p>櫻桃巧克力蛋糕</p>
                        </div>
                        <div class="third">
                            <p>8吋價格：</p>
                            <p>800</p>
                        </div>
                        <div class="forth">
                            <p>糕體口味：</p>
                            <p>巧克力</p>
                        </div>
                    </div>
                    <div class="right_infor">
                        <div class="first">
                            <p>製作者：</p>
                            <p>吵架王</p>
                        </div>
                        <div class="second">
                            <p>6吋價格：</p>
                            <p>600</p>
                        </div>
                        <div class="third">
                            <p>10吋價格：</p>
                            <p>1000</p>
                        </div>
                        <div class="forth">
                            <p>狀態</p>
                            <select name="" id="">
                                <option value="">上架</option>
                                <option value="">下架</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div class="descript">
                    <p>描述：</p>
                    <textarea name="" id="" cols="30" rows="7"></textarea>
                </div>
            </div>   
            <div class="button_outline" >
                <font-awesome-icon icon="fa-solid fa-xmark" id="toggle" @click="open"  />
                <div class="button_position">
                    <button>修改</button>
                    <button>確認</button>
                </div>
            </div>
        </div>
       
</template>
<script>
import $ from "jquery";
import switchButton from "./switch_button"
export default {
  name: "member_data",
  methods: {
    open:　function(e){
        // console.log($(e.target).parents('.outline').siblings())
        $(e.target).parents('.outline').siblings().addClass('close');
        $(e.target).parents('.outline').toggleClass('close');
    },
  },
  components:{
      switchButton,
  },
  
};
</script>
<style scoped lang="scss">
@import "../style/var.scss";
*{
    box-sizing: border-box;
}
.outline{
    display:flex;
    width:1025px;
    height:300px; /*展開300px*/
    padding:20px;
    background: #F7DCDC;
    border-radius:5px;
    transition:.3s;
    .img_outline{
        flex:1;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .text_outline{
        // flex:1;
        display:flex;
        flex-direction: column;
        justify-content: space-between;  
    }
}
.infor{
    display:flex;
    // flex-direction: column;
    justify-content: space-between;
    .left_infor,.right_infor{
        display:flex;
        flex-direction: column;
        // justify-content: space-between;
        >div{
            display: grid;
            grid-template-columns: 1fr 3fr;
            padding:0 3px;
            margin-bottom:5px;
            p{
                margin:0;
            }
        }
    }
}
.descript{
    margin-top:20px;
    display:grid;
    grid-template-columns: 1fr 7fr;
    textarea{
        width:100%;
        resize: none;
    }
    p{
        white-space: nowrap;
        margin:0;
    }
}
.button_outline{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    #toggle{
        cursor:pointer;
        font-size:24px;
        transform: rotate(0deg);
        transition:.5s;
    }
    .button_position{
        display:flex;
        flex-direction: column;
        button{
            width:100px;
            height:24px;
            margin-top:10px;
            background: #454545;
            color:white;
            border-radius: 20px;
            border:none;
            margin-left:5px;
            cursor: pointer;
            &:active{
                box-shadow: inset $shadow;
            }
        }
    }
}
.outline.close{
    height:50px;
    overflow: hidden;
    line-height:54px;
    padding:0 20px;
    .img_outline{
        display:none;
    }
    .text_outline{
        flex:1;
    }
    .button_outline{
        flex-shrink:1;
        display:flex;
        justify-content: center;
        align-items: center;
        #toggle{
            transform: rotate(45deg);
        }
        .button_position{
            display:none;
        }
    }
}
</style>