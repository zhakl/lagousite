<template>
    <div class="wrap">
        <mt-field  placeholder="手机号" type="email" class="email" v-model="email"></mt-field>
        <mt-field  placeholder="请证明你不是机器人" type="password" class="password" v-model="password"></mt-field>
        <mt-button size="large" class="enroll">登录</mt-button>
        <p class="noAccount">还没有账号？</p>
        <mt-button size="large" class="register">注册</mt-button>
        <p class="noAccount">点击注册，即代表您同意 <a href="">《拉钩用户协议》</a></p>
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
    @import '../assets/enroll.css';
</style>