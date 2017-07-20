<template>
    <div class="lagousite-index">
        <div class="HeaderPortrait">
            <p>
                <span v-model="username" class="control"></span>
            </p>
            <a href="#">{{username}} 简历></a>
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
    import {Headers, Footers} from '../components/index'

    export default {
        name: 'index',
        components: {
            Headers,
            Footers
        },
        data () {
            return {
                username: '',
            }
        },
        mounted(){
            this.getPersondata();
        },
        methods: {
            getPersondata(){
                this.$http.post('session').then((res) => {
                    if (res.data.data.success == 1) {
                        this.username = res.data.data.name;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    @import "../assets/style/lagousite.css";

</style>