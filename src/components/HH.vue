<template>
  <div class="hh">
          <!-- 左侧返回 -->
    <div class="hh-button is-left" v-show="isLeft">
      <i class="fa fa-chevron-left"></i>
      <button @click="$router.go(-1)">返回</button>
    </div>
    <!-- 中间标题 -->
    <h1 class="hh-title">{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: "hh",
  props: {
    title: {
      type: String
    },
    isLeft: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.hh {
  align-items: center;
  background-color: #009eef;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 16px;
  height: 45px;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}

.hh-button button {
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  display: inline-block;
  padding: 0;
  font-size: inherit;
  outline: none;
}
.hh-title {
  flex: 1;
}
.is-left {
  text-align: left;
}
</style>
