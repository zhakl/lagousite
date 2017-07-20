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
<style scoped>
    @import "../assets/style/Footer.css";
</style>