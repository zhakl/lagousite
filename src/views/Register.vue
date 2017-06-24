<template>
    <div class="wrap">
        <mt-field placeholder="请输入用户名" class="username" v-model="username"></mt-field>
        <mt-field placeholder="手机号" type="email" class="email" v-model="phone"></mt-field>
        <template v-if="flag">
            <mt-field placeholder="设置6-16位密码" type="password" class="password" v-model="password">
                <i class="ico" @click="toggle"></i>
            </mt-field>
        </template>
        <template v-else>
            <mt-field placeholder="设置6-16位密码" type="text" class="password" v-model="password">
                <i class="ico icos" @click="toggle"></i>
            </mt-field>
        </template>
        <mt-button size="large" class="register" @click.stop="storeAddressInfo()">注册</mt-button>
        <p class="noAccount">点击注册，即代表您同意 <a>《拉钩用户协议》</a></p>
    </div>
</template>
<script>
    import {MessageBox} from 'mint-ui';
    export default{
        name: 'enroll',
        data(){
            return {
                flag:true,
                username: '',
                phone: '',
                password: '',
            }
        },
        methods: {
            toggle(){
                this.flag=!this.flag;
            },
            storeAddressInfo () {
                var self = this;
                if (!/^[a-zA-Z0-9_]{6,16}$/.test(self.username)) {
                    MessageBox('提示', '用户名为6到16的数字或者汉字');
                    return false;
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
                        username: self.username,
                        phone: self.phone,
                        password: self.password
                    }
                ).then(function (res) {
                    if (res.data.status) {
                        if (!res.data.data.success) {
                            MessageBox('提示', res.data.data.msg);
                        } else {
                            MessageBox.alert(res.data.data.msg).then(action => {
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
<style scoped>
    @import '../assets/style/index.css';
    .password{
        position: relative;
    }
    .password i.ico{
        display: block;
        width: 20px;
        height: 13px;
        background: url(../assets/img/psweye_930f545.png) 0 0 no-repeat;
        background-size: 20px 30px;
        position: absolute;
        top:-5px;
        right:29px;
        -moz-transition: transform .3s linear 0s;
        -webkit-transition: transform .3s linear 0s;
        -o-transition: transform .3s linear 0s;
        transition: transform .3s linear 0s;
        z-index:111111;
    }
    .password i.icos{
        background: url(../assets/img/psweye_930f545.png) 0 -16px no-repeat;
        background-size: 20px 30px;
    }
</style>