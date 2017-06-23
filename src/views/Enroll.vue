<template>
    <div class="wrap">
        <mt-field  placeholder="已验证手机/邮箱" type="email" class="email" v-model="email"></mt-field>
        <mt-field  placeholder="密码" type="password" class="password" v-model="password"></mt-field>
        <mt-button size="large" class="enroll">登录</mt-button>
        <p class="noAccount">还没有账号？</p>
        <router-link :to="{ 'name':'register'}" class="register-but">
            <mt-button size="large" class="register">注册</mt-button>
        </router-link>
    </div>
</template>
<script>
    export default{
      name:'enroll',
      data(){
        return{
          email:'',
          password:''
        }
      }
    }
</script>
<style>
    @import '../assets/index.css';
</style>