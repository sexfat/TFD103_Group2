import App from '../../App'
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login'); 之後用來定義router頁面component，改用下面的方法動態加載
export default[{
    mode:"history",
    path:'/',
    component:App,   //component: r => require.ensure([], () => r(require('../page/home')), 'home')
    children:[
        
        // {path:'', component: r => require.ensure([], () => r(require('../page/choose_page')), 'choose_page'),children},
        {path:'assign', component: r => require.ensure([], () => r(require('../page/assign')), 'assign_page')},
        {path:'vote', component: r => require.ensure([], () => r(require('../page/vote_page')), 'vote_page')},
        {path:'employee', component: r => require.ensure([], () => r(require('../behind_page/employee_page')), 'employee_page')},
        {path:'memberManager', component: r => require.ensure([], () => r(require('../behind_page/member_manager')), 'member_manager')},
        {path:'voteManager', component: r => require.ensure([], () => r(require('../behind_page/vote_manager')), 'vote_manager')},
        {path:'shopManager', component: r => require.ensure([], () => r(require('../behind_page/behind_shop_page')), 'behind_shop')},
        {path:'cakeMakeManager', component: r => require.ensure([], () => r(require('../behind_page/behind_cake_make_page')), 'behind__cake_make')},
        {path:'messageManager', component: r => require.ensure([], () => r(require('../behind_page/behind_message_manager_page')), 'behind_message_manager')},
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