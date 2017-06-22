<template>
    <div class="wrap">
        <mt-field  placeholder="请输入用户名" class="username"   v-model="username"></mt-field>
        <mt-field  placeholder="手机号" type="email" class="email" v-model="email"></mt-field>
        <mt-field  placeholder="设置6-16位密码" type="text" class="password" v-model="password">
            <!--<i class="Eye" :class="{'EyeClosed':Eye,'EyeOpen':!Eye}"@click="toggle"></i>-->
        </mt-field>
        <mt-button size="large" class="enroll">登录</mt-button>
        <p class="noAccount">还没有账号？</p>
        <mt-button size="large" class="register" @click.stop="storeAddressInfo()">注册</mt-button>
        <p class="noAccount">点击注册，即代表您同意 <a href="">《拉钩用户协议》</a></p>
    </div>
</template>
<script>
  export default{
    name:'enroll',
    data(){
      return{
        username:'',
        email:'',
        password:'',
//        Eye:false
      }
    },
    methods: {
//      toggle: function () {
//        this.Eye = !this.Eye;
//      },
      storeAddressInfo () {
//        debugger
        var self = this;
        if (!self.username) {
          alert("请填写用户名")
          return false;
        }
        if  (!/^1[34578]\d{9}$/.test(self.email)) {
          alert("手机号码不正确或者为空")
          return false;
        }
        if (!/^\d{6,20}$/.test(self.password)) {
          alert("密码数字为6到16位")
          return false;
        }
      }

//        else {
//          if (!self.address['Mobile'] || !/^1[34578]\d{9}$/.test(self.address['Mobile'])) {
//            self.$vux.toast.show({
//              'text': "手机号为空或者手机号码不正确",
//              'type': 'warn',
//              'width': '55%'
//            })
//            return false;
//          }

//        }
//
        // console.log(self.addressInfo);

//        this.saveAddressInfo(self.address);
      },


  }
</script>
<style>
    @import '../assets/index.css';
    .email{
        border-radius: 0;
    }
    .Eye{
        background: url("../assets/img/psweye_930f545.png") 0 0 no-repeat;
        width: 50px;
        height: 25px;
        display: inline-block;
    }
    .eyeOpen{
        background: url("../assets/img/psweye_930f545.png") 0 -32px no-repeat;
        width: 50px;
        height: 25px;
        display: inline-block;
    }
</style>