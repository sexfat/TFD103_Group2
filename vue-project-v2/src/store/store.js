import nodeNotifier from "node-notifier";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  // 假會員資料
  member_status: [
    {
      email: "abc@gmail.com",
      nickName: "叮叮",
      phone: "0900123123",
      adress: "台北市北投區行義路",
      name: "吵架王",
      createDate: "2021/11/23",
      birthday: "84/04/06",
      status: 1,
    },
    {
      email: "qwe@gmail.com",
      nickName: "咚咚",
      phone: "0955478565",
      adress: "台北市中山區問號路",
      name: "一二王",
      createDate: "2025/05/09",
      birthday: "90/06/06",
      status: 0,
    },
    {
      email: "ffddd@gmail.com",
      nickName: "康康",
      phone: "0956485465",
      adress: "台北市天龍國世界第一",
      name: "棒槌",
      createDate: "2022/04/08",
      birthday: "65/08/09",
      status: 1,
    }
  ],
  // 假員工資料
  employee_data:[{
    id:"25355",
    creator:"吵架王",
    password:"qazwsx",
    createDate:"2021/09/22",
    name:"陳阿揚",
    power:1,
    status:1,
  },{
    id:"12254",
    creator:"吵架王王王",
    password:"edcrfv",
    createDate:"2024/05/25",
    name:"阿佑",
    power:1,
    status:0,
  },{
    id:"54125",
    creator:"吵架王王王王王",
    password:"tgbyhn",
    createDate:"1998/06/04",
    name:"阿瑋",
    power:0,
    status:0,
  },{
    id:"852145",
    creator:"吵架王王王吵架",
    password:"zxcvbn",
    createDate:"1854/12/30",
    name:"阿涵",
    power:1,
    status:1,
  }],
  upload_game_pic:[{
    name:"巧克力旋風蛋糕",
    author:"黃筱庭",
    description:"好吃阿不然咧，又好看，就是不好買"
  },{
    name:"黃金薯草莓蛋糕",
    author:"小小羊",
    description:"輕鬆製作，輕鬆買"
  },{
    name:"高貴黑森林",
    author:"小羊羊",
    description:"普通的好吃蛋糕"
  }],
  // 假訂單資料
  order_detail:[{
    order_id:6584,
    member_id:15426,
    status:0,
    order_date:"2021/01/12",
    send_date:"2021/01/14",
    complete_date:"2021/01/14",
    recipient:"叮叮",
    phone:'0951254125',
    coupon:{
      id:1552,
      prize:20,
    },
    shipping:20,
    address:"台北市北投區",
    cake_prize:{
      name:"香蕉蛋糕",
      prize:550,
    },
    pake_prize:{
      name:"普通豪華包裝",
      prize:50
    },
    card_prize:{
      name:"豪華華小卡",
      prize:25,
    },
    total:625,
  },{
    order_id:7545,
    member_id:14521,
    status:1,
    order_date:"2012/04/15",
    send_date:"2021/06/16",
    complete_date:"2026/01/20",
    recipient:"咚咚",
    phone:'0954512125',
    coupon:{
      id:null,
      prize:null,
    },
    shipping:10,
    address:"北投區台北市",
    cake_prize:{
      name:"草莓蛋糕",
      prize:400,
    },
    pake_prize:{
      name:"豪華大包裝",
      prize:80
    },
    card_prize:{
      name:"豪華小小小卡",
      prize:10,
    },
    total:490,
  },{
    order_id:8584,
    member_id:75426,
    status:1,
    order_date:"2054/11/25",
    send_date:"2066/06/05",
    complete_date:"2067/11/14",
    recipient:"ㄚㄚ",
    phone:'0954567125',
    coupon:{
      id:1252,
      prize:40,
    },
    shipping:20,
    address:"新北市神奇區",
    cake_prize:{
      name:"巧克力蛋糕",
      prize:500,
    },
    pake_prize:{
      name:"豪華包裝",
      prize:50
    },
    card_prize:{
      name:"豪華小卡",
      prize:15,
    },
    total:565,
  }],
  // 假蛋糕製作管理資料
  cake_make_data:[{
    name:"草莓",
    id:12,
    prize:20,
    type:1,
    description:"好吃的大草莓",
    status:1
  },{
    name:"香蕉",
    id:16,
    prize:15,
    type:1,
    description:"好吃的大香蕉",
    status:1
  },{
    name:"巧克力",
    id:8,
    prize:15,
    type:0,
    description:"好吃的大巧克力",
    status:0
  }],
  // 假修改人氣參賽作品資料
  modify_vote:[{
    name:"無敵大蛋糕",
    text:"輕鬆做",
    vote:111,
    status:1,
  },{
    name:"超級無敵大蛋糕",
    text:"超級無敵輕鬆做",
    vote:1111,
    status:0,
  },{
    name:"小小無敵大蛋糕",
    text:"小小輕鬆做",
    vote:11111,
    status:1,
  }],
  // 假主廚蛋糕資料
  chef_cake:[{
    id:10025,
    name:"櫻桃蛋糕",
    eight:800,
    test:"巧克力",
    author:"吵架王",
    six:500,
    ten:1000,
    status:1,
    description:"營養好吃的蛋糕，吃完可以去三鐵"
    
  },{
    id:10485,
    name:"草莓蛋糕",
    eight:500,
    test:"奶油千層",
    author:"王吵架",
    six:400,
    ten:1000,
    status:1,
    description:"營養好吃的蛋糕，吃完還是可以去三鐵"
  },{
    id:10785,
    name:"波士頓派",
    eight:800,
    test:"鮮奶油",
    author:"不吵架",
    six:700,
    ten:1200,
    status:2,
    description:"營養好吃的蛋糕，吃完太胖必須要去三鐵"
    
  }]

};
export default new Vuex.Store({
  state,
  actions: {
    updateStatus(context, [status]) {
      context.commit("rewriteStatus", status);
    }
  },
  mutations: {
    rewriteStatus(state, status) {
      state.member_status = status;
    }
  }
});
