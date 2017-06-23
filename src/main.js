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
import Register from './views/Register.vue'
const router = new VueRouter({
  // mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    {path: '/', component: Enroll, name: 'enroll'},
    {path: '/enroll', component: Enroll, name: 'enroll'},
    {path: '/register', component: Register, name: 'register'},
    {path: '*', redirect: '/'}
  ]
})
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:3000/';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})