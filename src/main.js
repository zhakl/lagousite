import Vue from 'vue'
import App from './App.vue'
import MinUi from 'mint-ui'
import axios from 'axios'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
Vue.use(MinUi)
Vue.use(VueRouter)
const Enroll = resolve => require(['./views/Enroll.vue'], resolve)
const Index = resolve => require(['./views/Index.vue'], resolve)
const Register = resolve => require(['./views/Register.vue'], resolve)
const Seek = resolve => require(['./views/Seek.vue'], resolve)
const Position = resolve => require(['./views/Position.vue'], resolve)


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Enroll,
            name: 'enroll'
        },
        {
            path: '/index',
            component: Index,
            name: 'index'
        },
        {
            path: '/enroll',
            component: Enroll,
            name: 'enroll2'
        },
        {
            path: '/seek',
            component: Seek,
            name: 'seek'
        },
        {
            path: '/position',
            component: Position,
            name: 'position'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
router.afterEach((to, from, next) => {
    document.title = to.name;
})
Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = document.location.origin + '/';
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})