<template>
  <div class="index">
    <router-view></router-view>
    <TabBar :data="tabBarData"></TabBar>
  </div>
</template>
<script>
import TabBar from '@/components/Tabbar.vue'
export default {
  name: "index",
  data(){
      return {
          tabBarData:[
            { title: "首页", icon: "home", path: "/home" },
            { title: "订单", icon: "file-text-o", path: "/order" },
            { title: "我的", icon: "user", path: "/me" }
          ]
  }
  },
 
  components:{
      TabBar
  }
};
</script>
<style scoped>
.index{
    width:100%;
    height:100%;
    padding-bottom:45px;
}
</style>
