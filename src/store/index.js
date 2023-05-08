import { createStore } from 'vuex'
export default createStore({
  state: {
    isCollapse: true,
    currentMenu: null,
    token: null
  },
  mutations: {
    //折叠侧边栏
    updateIsCollapse(state, payload) {
      state.isCollapse = !state.isCollapse
    },
    //面包屑
    selectMenu(state, val) {
      //判断
      val.name == 'screen'
        ? state.currentMenu == null
        : (state.currentMenu = val)
    },
    setToken(state, val) {
      state.token = val
    },
    clearToken(state) {
      state.token = ''
    },
    getToken(state) {
      state.token = state.token
    }
  }
})
