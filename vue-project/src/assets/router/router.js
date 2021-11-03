import App from '../../App'
import assignPage from '../page/assign'
import title_h1 from '../components/title_h1'
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login'); 之後用來定義router頁面component，改用下面的方法動態加載
export default[{
    mode:"history",
    path:'/',
    component:App,   //component: r => require.ensure([], () => r(require('../page/home')), 'home')
    children:[
        
        {path:'assign', component: r => require.ensure([], () => r(require('../page/assign')), 'assign_page')},
        {path:'vote', component: r => require.ensure([], () => r(require('../page/vote_page')), 'vote_page')},
        {path:'', component: r => require.ensure([], () => r(require('../page/index')), 'index')},
        {path:'cakeDesign', component: r => require.ensure([], () => r(require('../page/cake_design')), 'cakeDesign')},
    ],
    data(){
        return{
            datas:123456,
            wer:12654,
        }
    }
}]