// 使用 Vuex 容器存储 token
import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录用户。一个对象，包含一个token信息
    user: getItem('user')
    // user: null
  },
  mutations: {
    setuser (state, data) {
      state.user = data
      // 为了防止刷新丢失 state 中的 user 状态，我们把它放到本地存储
      setItem('user', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
