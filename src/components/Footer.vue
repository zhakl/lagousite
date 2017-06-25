<template>
    <div class="wrap">
        <div class="tabbar"v-model="selected">
            <ul>
                <li class="tab-item ">
                    <p></p>
                    <span>职位</span>
                </li>
                <li class="tab-item tab-item-two">
                    <p></p>
                    <span>搜索</span>
                </li>
                <li class="tab-item tab-item-three">
                    <p></p>
                    <span>我的</span>
                </li>
            </ul>







            <!--<mt-tab-item id="tab2" class="mint-tab-item-icon2" >-->
            <!--<img slot="icon" src="" >-->
            <!--搜索-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="tab3">-->
            <!--<img slot="icon" src="" class="mint-tab-item-icon3">-->
            <!--我的-->
            <!--</mt-tab-item>-->
        </div>
    </div>
</template>
<script>
export default {
    name:"Footers",
    data(){
    return{
        selected:''
    }
}

}
</script>
<style scoped="">
    @import "../assets/style/Footer.css";
    .wrap{

    }
</style>