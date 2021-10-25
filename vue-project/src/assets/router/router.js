import App from '../../App'
import assignPage from '../page/assign'
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login'); 之後用來定義router頁面component，改用下面的方法動態加載
export default[{
    mode:"history",
    path:'',
    component:assignPage,   //component: r => require.ensure([], () => r(require('../page/home')), 'home')
    // children:[],
    data(){
        return{
            
        }
    }
}]