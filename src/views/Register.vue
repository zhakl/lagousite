<template>
    <div class="wrap">
        <mt-field placeholder="请输入用户名" class="username" v-model="username"></mt-field>
        <mt-field placeholder="手机号" type="email" class="email" v-model="phone"></mt-field>
        <mt-field placeholder="设置6-16位密码" type="password" class="password" v-model="password">
            <i></i>
        </mt-field>
        <mt-button size="large" class="register" @click.stop="storeAddressInfo()">注册</mt-button>
        <p class="noAccount">点击注册，即代表您同意 <a>《拉钩用户协议》</a></p>
    </div>
</template>
<script>
    import { MessageBox } from 'mint-ui';
    export default{
        name: 'enroll',
        data(){
            return {
                username: '',
                phone: '',
                password: '',
            }
        },
        methods: {
            storeAddressInfo () {
                var self = this;
                if(!/^[a-zA-Z0-9_]{6,16}$/.test(self.username)){
                    MessageBox('提示', '用户名为6到16的数字或者汉字');
                }
                else if (!/^1[34578]\d{9}$/.test(self.phone)) {
                    MessageBox('提示', '手机号码不正确或者为空')
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
                self.$http.post('http://localhost:3000/register', {
                        username: this.username,
                        phone: this.phone,
                        password: this.password
                    }
                ).then(function (res) {
                    console.log(res.data)
                    if(res.data.status){
                        if(res.data.data.success == '0'){
                            MessageBox('提示', '该手机号码已经被注册')
                        }else{
                            MessageBox.alert('注册成功').then(action => {
                                self.$router.push({name: "enroll"});
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
    @import '../assets/index.css';
</style>