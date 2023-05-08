import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index'
import './api/mock.js'

const app = createApp(App)
//路由守卫
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (token || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})
//读到这一行会进入到router
app.use(router).use(store)
// app.use(ElementPlus);
app.mount('#app')
//导入icon,之后就可以通过component标签使用icon了
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
