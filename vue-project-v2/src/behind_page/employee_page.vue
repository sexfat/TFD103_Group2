<template>
  <div>
    <behind-header thistitle="員工管理"></behind-header>
    <div id="top_bar">
        <h1>員工資料</h1>
        <search-bar></search-bar>
        </div>
    <div class="forPosition" v-for="(data,index) in employee_data" :key="index">
      <section class="first_site" >
      
      <div id="employee">
        <div class="manager_list">
      <div class='manager_img_outline'>
        <img src="" alt="" />
        <button>修改照片</button>
      </div>
      <div class="manager_list_content">
        <div class="manager_details">
            <label for="">員工編號</label>
            <input class="authority" type="text" :value="data.id">
        </div>
        <div class="manager_details">
            <label for="">員工密碼</label>
            <input class="authority" type="password" :value="data.password">
        </div>
       <div class="manager_details">
            <label for="">員工姓名</label>
            <input class="authority" type="text" :value="data.name">
        </div>
      </div>
      <div class="manager_list_content">
          <div class="manager_details">
              <label for="">創建員工</label>
              <input class="authority" type="text" :value="data.creator">
          </div>
          <div class="manager_details">
              <label for="">創建日期</label>
              <input class="authority" type="text" :value="data.createDate">
          </div>
          <div class="manager_details">
            <label for="">權限</label>
            <select name="" class="authority">
              <option value="" :selected="data.power == 0" >管理者</option>
              <option value="" :selected="data.power == 1">超級管理者</option>
            </select>
          </div>
      </div>
    <!--按鈕開關-->
      <div class="manager_list_button">
          <span class="switch_button" @click="change(index)">
    <label for="" style="margin-right:3px;">狀態</label>
    <div class="switch" id="outline" :class="{'-on':data.status}">
    <span class="circle" id="circle" :class="{'-on':data.status}"></span>
    </div>
</span>
          <span></span>
          <span></span>
        <button>修改</button>
        <button>確認</button>
        </div>
    </div>
      </div>
  </section>
    </div>
  </div>
</template>
<script>
// import "../font/fff.less";
import $ from "jquery";
import behindHeader from "../components/behind_page_headercom";
import searchBar from "../components/search_bar";
import employee from "../components/employee";
export default {
  name: "employee_page",
  components: {
    behindHeader,
    searchBar,
    employee,
  },
  mounted(){
    $("#employee").siblings().removeClass("target");
    $("#employee").addClass("target");

  },
  methods:{
    change(index){
        let i =  this.employee_data[index].status;
        this.employee_data[index].status = this.employee_data[index].status?0:1
          return index;
    },
  },
  computed:{
    employee_data(){
      return this.$store.state.employee_data;
    }
  },
};
</script>
<style scoped lang="scss">
$shadow: 4px 4px 5px 0 rgba(0, 0, 0, 0.3);
* {
  box-sizing: border-box;
}

.first_site {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
  margin-top:70px;
}
#employee {
  display: grid;
  gap: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.forPosition {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.manager_list{
    width:1000px;
    height:250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;
    background-color: #F0D5CE;
    .manager_img_outline{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img{
          width: 200px;
          height: 200px;
        }
        button{
            position:absolute;
            right:0px;
            bottom:0;
            width:100px;
            height:50px;
            border:none;
            border-radius:5px 0 0 0;
            font-size:20px;
            background: #454545;
            color:white;
            font-weight: 900;
            box-shadow: $shadow;
            cursor: pointer;
        }
    }
    .manager_list_content{
        display:flex;
        flex-direction: column;
        height:200px;
        justify-content: space-between;
        align-items: center;
        font-size:0;
    }
    .manager_details{
      width: 280px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
    }
    label{
      font-size: 20px;
      width: 90px;
    }
    .authority{
      width: 180px;
      text-align: center;
    }
}
.manager_list_button{
  width:115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  
  .switch{
      width:40px;
      height:25px;
      border-radius:10px;
      display: flex;
      align-items: center;
      border-radius: 20px;
      background-color: #454545;
      position: relative;
      
    .circle{
      width: 20px;
      height: 20px;
      border-radius: 100px;
      background-color: white;
      display: inline-block;
      position: relative;
      left: 2px;
      // left: 14px;
    }
  }
  button{
    background-color: #454545;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
}
select{
  border:2px solid ;
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
        border-radius:50%px;
        background-color: white;
        display: inline-block;
        position: relative;
        left: 2px;
        top:-1px;
        // left: 14px;
        transition:.5s;
    }
    .circle.-on{
    left: 12px;
    transition: .5s;
}
}

.switch.-on{
    transition: .5s;
    background-color: green;
}
#top_bar{
  width:1000px;
  margin:0 auto;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>