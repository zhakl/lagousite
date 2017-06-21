import Vue from 'vue'
import App from './App.vue'
import MinUi from 'mint-ui'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
Vue.use(MinUi)
Vue.use(VueRouter)
//component
import Enroll from './views/Enroll.vue'
import Register from './views/Register.vue'
const router = new VueRouter({
  routes: [
    {path: '/', component: Enroll, name: 'enroll'},
    {path: '/enroll', component: Enroll, name: 'enroll'},
    {path: '/register', component: Register, name: 'register'},
    {path: '*', redirect: '/'}
  ]
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})