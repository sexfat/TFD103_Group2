<template>
    <div id="index_box">
        <div class="first_screen">
            
        </div>
        <div class="second_screen">
            <div class="second_title">
                <titleh1 title="關於我們"></titleh1>
            </div>
        </div>
        <div class="third_screen">

        </div>
        <div class="fourth_screen">
            <div class="fourth_titl">
                <titleh1 title="主廚推薦"></titleh1>
            </div>
            <!-- <card-vote v-for="asd in 3"></card-vote> -->
        </div>
        <div class="fifth_screen">
            <div class="fifth_titl">
                <titleh1 title="關於蛋糕的小知識"></titleh1>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:"index",
    mounted() {
        
    },
}
</script>
<style scoped lang="scss">
    @import "../style/var.scss";
    body{
        margin: 0;
        position: relative;
        background-color: #EFE6E4;
        height: 1000px;
    }

    
</style>