import App from '../../App'
import assignPage from '../page/assign'
import title_h1 from '../components/title_h1'
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login'); 之後用來定義router頁面component，改用下面的方法動態加載
export default[{
    mode:"history",
    path:'/',
    component:App,   //component: r => require.ensure([], () => r(require('../page/home')), 'home')
    children:[
        {path:'', component: r => require.ensure([], () => r(require('../components/title_h1')), 'title_h1')},
        {path:'123', component: r => require.ensure([], () => r(require('../page/assign')), 'assign_page')},
    ],
    data(){
        return{
            datas:123456,
            wer:12654,
        }
    }
}]