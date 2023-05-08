<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside />
      <el-container>
        <el-container class="right-container">
          <common-header />
          <el-main><router-view /></el-main></el-container
      ></el-container>
    </el-container>
  </div>
</template>

<script setup>
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
</script>
<style lang="less" scoped>
.common-layout {
  user-select: none;
}
.el-container {
  flex-wrap: wrap;
}
.common-layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-aside {
    height: 100%;
    background: #304156;
    // background-color: rgb(84, 92, 100);
  }
}
.right-container {
  position: relative;
  .el-main {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 60px;
    padding: 0;
  }
}
</style>
