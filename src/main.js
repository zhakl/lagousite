import Vue from 'vue'
import App from './App.vue'
import MinUi from 'mint-ui'
import axios from 'axios'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
Vue.use(MinUi)
Vue.use(VueRouter)
//component
import Enroll from './views/Enroll.vue'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import Seek from './views/Seek.vue'
import Position from './views/Position.vue'
const router = new VueRouter({
    // mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({y: 0}), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        {path: '/', component: Enroll, name: 'enroll'},
        {path: '/index', component: Index, name: 'index'},
        {path: '/enroll', component: Enroll, name: 'enroll2'},
        {path: '/seek', component: Seek, name: 'seek'},
        {path: '/position', component: Position, name: 'position'},
        {path: '/register', component: Register, name: 'register'},
        {path: '*', redirect: '/'}
    ]
})
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = document.location.origin + '/';
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})