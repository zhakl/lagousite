<template>
    <div class="contern">

        <div class="HeaderPortrait">
            <span v-model="session.name" class="control"  value="session.name" />></span>
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
        <Headers></Headers>
        <Footers></Footers>
    </div>
</template>
<script>
    import {Headers,Footers} from '../components/index'

    export default {
        name: 'index',
        components: {
            Headers,
            Footers
        }
                data () {
            return {
                session: {
                    name: '',
                }
            }
        },
        mounted(){
            var self = this;
            self.$http.post('http://localhost:3000/session').then(function (res) {
                console.log(res);

            }).catch(function (err) {
            });


        }
    }
</script>
<style>
    @import "../assets/style/index.css";
</style>