<template>
    <div class="contern">
        <div class="HeaderPortrait">
            <p>
                <span></span>
            </p>
            <a href="#">简历></a>
        </div>
        <div class="deliver">
           <ul>
               <li>投递</li>
               <li class="active">面试</li>
               <li>邀约</li>
               <li class="active">收藏</li>
           </ul>
        </div>
        <div class="SignOut">
            <p>退出登录</p>
        </div>
    </div>
</template>
<script>
    import {Header, Footer} from '../components'
    export default {
        name: 'index',
        components: {
            Header,
            Footer,
        },
//        data(){
//
//        },
//        beforeCreate: function () {
//            fetchData()
//            {
//                var self = this;
//                self.$http.post('http://localhost:3000/session', {}
//                ).then(function (res) {
//
//                }).catch(function (err) {
//                });
//            }
//        },
    }
</script>
<style>
    @import "../assets/style/index.css";
</style>