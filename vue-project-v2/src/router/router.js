import App from '../App';
console.log(App)
// Vue.use(Router)
export default[{
    mode:"history",
    path:'',
    component:App,   //component: r => require.ensure([], () => r(require('../page/home')), 'home')
    children:[
        {path:'', component: r => require.ensure([], () => r(require('../page/assign')), 'assign_page')},
        {path:'vote', component: r => require.ensure([], () => r(require('../page/vote_page')), 'vote_page')},
        {path:'employee', component: r => require.ensure([], () => r(require('../behind_page/employee_page')), 'employee_page')},
        {path:'memberManager', component: r => require.ensure([], () => r(require('../behind_page/member_manager')), 'member_manager')},
        {path:'voteManager', component: r => require.ensure([], () => r(require('../behind_page/vote_manager')), 'vote_manager')},
        {path:'shopManager', component: r => require.ensure([], () => r(require('../behind_page/behind_shop_page')), 'behind_shop')},
        {path:'cakeMakeManager', component: r => require.ensure([], () => r(require('../behind_page/behind_cake_make_page')), 'behind__cake_make')},
        {path:'messageManager', component: r => require.ensure([], () => r(require('../behind_page/behind_message_manager_page')), 'behind_message_manager')},
    ],
}]