<template>
  <div id="background"></div>
  <el-form :model="loginForm" class="login-container">
    <div class="header"><span>Login</span></div>
    <div class="content">
      <div class="userName">
        <el-icon><User /></el-icon>
        <input
          type="input"
          placeholder="请输入账号"
          v-model="loginForm.username"
        />
      </div>
      <div class="passWord">
        <el-icon><Lock /></el-icon>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        />
      </div>
      <button @click.prevent="login">登录</button>
    </div>
  </el-form>
</template>
<script setup>
import { reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const { proxy } = getCurrentInstance()
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
const store = useStore()
const router = useRouter()
const login = async () => {
  if (loginForm.username === 'admin' && loginForm.password === 'admin') {
    sessionStorage.setItem('token', 1)
    await router.push({
      path: '/'
    })
  } else {
    alert('用户名或密码错误')
  }
}
</script>
<style lang="less">
#background {
  background: url('@/assets/images/pageBg.png') repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  z-index: -1;
}
.login-container {
  width: 280px;
  height: 220px;
  background-color: transparent;
  //居中
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header {
    height: 30px;
    width: 300px;
    span {
      font-size: 30px;
      font-weight: 600;
      color: #fff;
      border-bottom: 4px solid rgb(60, 96, 138);
    }
  }
  .content {
    height: 140px;
    margin-top: 50px;
    div {
      display: flex;
      align-items: center;
      .el-icon {
        font-size: 25px;
        color: #fff;
        margin-bottom: -15px;
        margin-right: 3px;
      }
      input {
        width: 280px;
        height: 20px;
        font-size: 16px;
        color: #fff;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(66, 66, 125);
        margin-top: 20px;
      }
    }
    button {
      width: 280px;
      height: 40px;
      margin-top: 10px;
      background-color: transparent;
      color: #fff;
      border-color: rgb(55, 95, 136);
      box-shadow: 1px 1px rgb(55, 95, 136);
    }
  }
}
</style>
