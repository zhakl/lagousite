<template>
    <div class="wrap">
        <mt-field placeholder="请输入手机号或者用户名" type="text" class="username" v-model="username"></mt-field>
        <mt-field placeholder="请输入密码" type="password" class="password" v-model="password"></mt-field>
        <mt-button size="large" class="enroll" @click.stop="storeAddressEnroll()">登录</mt-button>
        <p class="noAccount">还没有账号？</p>
        <router-link :to="{ 'name':'register'}" class="register-but">
            <mt-button size="large" class="register">注册</mt-button>
        </router-link>
    </div>
</template>
<script>
    import {MessageBox} from 'mint-ui';
    export default{
        name: 'enroll',
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            storeAddressEnroll () {
                var self = this;
                if(!self.username){
                    MessageBox('提示', '手机或者用户名不能为空')
                    return false;
                }
                else if (!/^\d{6,20}$/.test(self.password)) {
                    MessageBox('提示', '密码数字为6到16位')
                    return false;
                } else {
                    this.fetchData();
                }
            },
            fetchData(){
                var self = this;
                self.$http.post('http://localhost:3000/login', {
                        username: self.username,
                        password: self.password
                    }
                ).then(function (res) {
                    if (res.data.status) {
                        if (!res.data.data.success) {
                            MessageBox('提示', res.data.data.msg)
                        } else {
                            MessageBox.alert(res.data.data.msg).then(action => {
                                self.$router.push({name: "index"});
                            });
                        }
                    }
                }).catch(function (err) {
                });
            }
        }
    }
</script>
<style>
    @import '../assets/style/Enroll.css';
</style>