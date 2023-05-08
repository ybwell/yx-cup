<template>
  <el-aside :width="$store.state.isCollapse ? '210px' : '64px'">
    <!-- 外层容器 -->
    <el-menu
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#304156"
      :collapse="!$store.state.isCollapse"
    >
      <!-- 遍历出没有子路由的选项 -->
      <el-menu-item
        menu-item
        v-for="item in noChildren()"
        :index="item.path"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <!-- 图标 -->
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <!-- 遍历出有子路由的选项 -->
      <el-sub-menu
        :index="item.label"
        v-for="item in hasChildren()"
        :key="item.path"
      >
        <!-- 父级路由 -->
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <!-- 子级路由组 -->
        <el-menu-item-group>
          <!-- 单个路由 -->
          <el-menu-item
            v-for="(subItem, subIndex) in item.children"
            :index="subItem.path"
            :key="subIndex"
            @click="clickMenu(subItem)"
          >
            <!-- 图标 -->
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const list = [
  {
    path: '/screen',
    name: 'screen',
    label: '数据总览',
    icon: 'dataLine'
  },

  {
    path: '/other',
    label: '其他',
    icon: 'location',
    children: [
      {
        path: '/service1',
        name: 'service1',
        label: '服务1',
        icon: 'location'
      },
      {
        path: '/service2',
        name: 'service2',
        label: '服务2',
        icon: 'location'
      }
    ]
  },

  {
    path: '/borrow',
    name: 'borrow',
    label: '借书详情',
    icon: 'management'
  },
  {
    path: '/out',
    name: 'out',
    label: '逾期未还',
    icon: 'failed'
  },
  {
    path: '/collection',
    name: 'collection',
    label: '馆藏',
    icon: 'reading'
  }
]
const router = useRouter()
//判断是否有二级菜单
const noChildren = () => {
  return list.filter((item) => !item.children)
}
const hasChildren = () => {
  return list.filter((item) => item.children)
}
const clickMenu = (item) => {
  router.push({
    name: item.name
  })
  store.commit('selectMenu', item)
}
</script>
<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}
.el-menu {
  border-right: none;
}
span {
  margin-left: 8px;
}
</style>
