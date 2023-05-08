<template>
  <el-header>
    <div class="left-content">
      <!-- 图标的展示 -->
      <el-button size="small" @click="handleCollapse()">
        <el-icon :size="20" color="#333"> <Fold /> </el-icon
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/" class="bread" style="user-select: none">
        <!-- 首页是一定存在的，所以直接写死 -->
        <el-breadcrumb-item :to="{ path: '/' }"
          ><span>数据总览</span></el-breadcrumb-item
        >
        <el-breadcrumb-item :to="current.path" v-if="current">
          <span style="user-select: none">{{ current.label }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="centerContent">
      <span>图书馆大数据平台</span>
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="hicon"><Tools /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>系统设置</el-dropdown-item>
            <el-dropdown-item>反馈中心</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-popover
        placement="bottom"
        :width="130"
        trigger="hover"
        content="暂时没有新消息哦~"
      >
        <template #reference>
          <el-icon class="hicon"><BellFilled /></el-icon>
        </template>
      </el-popover>
      <el-icon class="hicon"><Menu /></el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          <!-- 用户图片 -->
          <img class="user" :src="getImageSrc(4)" />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
let store = useStore()
let getImageSrc = (user) => {
  // console.log(import.meta.url)
  // console.log(new URL(`../assets/images/${user}.jpeg`, import.meta.url))
  return new URL(`../assets/images/${user}.jpeg`, import.meta.url).href
}
let handleCollapse = () => {
  store.commit('updateIsCollapse')
  store.state.token = false
}
//计算属性
const current = computed(() => {
  return store.state.currentMenu
})
const router = useRouter()
const handleLoginOut = async () => {
  await router.push({
    name: 'login'
  })
  sessionStorage.removeItem('token')
}
</script>
<style lang="less" scoped>
.el-header {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-left: 10px;
    border: none;
    background-color: #fff;
  }
  p {
    font-size: 16px;
    color: #fff;
  }
  .bread {
    span {
      font-size: 14px;
      color: #666;
      cursor: pointer;
      width: 81px;
      :hover {
        color: rgb(101, 104, 103);
        cursor: pointer;
      }
    }
  }
}
.centerContent {
  span {
    font-size: 20px;
    font-weight: 700;
  }
}
.right-content {
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .hicon {
    font-size: 20px;
    color: #333;
  }
  // 用户头像
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
