import App from '../../App'
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login'); 之後用來定義router頁面component
export default[{
    
    path:'',
    component:App,
    // children:[App],
}]