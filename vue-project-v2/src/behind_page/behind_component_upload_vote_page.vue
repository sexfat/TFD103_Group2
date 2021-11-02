<template>
  <section id="right_section">
    <div class="title">
      <h1>人氣投票上傳</h1>
      <searchBar></searchBar>
    </div>
    <div class="cake" >
        <div class="outline" v-for="(data,index) in cake_data" :key="index">
          <div class="img_outline">
            <img src="../assets/images/cho_cake.jpg" alt="" />
          </div>

          <div class="text_outline">
            <h1>蛋糕：{{ data.name }}</h1>
            <p id="author">創作者：{{ data.author }}</p>
            <p id="description">創作理念：{{ data.description }}</p>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import uploadVote from "../components/upload_vote";
export default {
  name: "upload_vote",
  components: {
    behindHeader,
    searchBar,
    uploadVote,
  },
  data() {
    return {
      showWhat: [],
    };
  },
  methods: {},
  mounted() {
    $("#upload_votePic").siblings().removeClass("target");
    $("#upload_votePic").addClass("target");
  },
  computed:{
    cake_data(){
      return this.$store.state.upload_game_pic
    }
  }
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}
.title {
  width: 775px;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  h1 {
    font-size: 36px;
    font-weight: 400;
  }
}
.cake {
  display: grid;
  gap: 30px;
}
#right_section {
  padding: 70px 100px;
  .title {
    display: flex;
    justify-content: space-between;
  }
}
.outline {
  display: flex;
  width: 775px;
  height: 250px;
  padding: 20px;
  background: #f7dcdc;
  border-radius: 5px;
  // transform:scale(2);
  .img_outline {
    flex: 0.5;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text_outline {
    flex: 1;
    // display:flex;
    margin-left: 20px;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      margin-top: 0;
      font-size: 20px;
      color: #515151;
    }
    #author {
      font-size: 12px;
      color: #515151;
    }
    #description {
      font-size: 16px;
      color: #515151;
      font-weight: 700;
    }
  }
}
</style>