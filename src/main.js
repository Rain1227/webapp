import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// REM 基准值：html 标签的字体大小
import 'amfe-flexible'
// 按需注册 Vant 组件
import './utils/register-vant.js'
import './styles/index.less'
import {
  Button,
  Cell,
  CellGroup
} from 'vant'

Vue
  .use(Button)
  .use(Cell)
  .use(CellGroup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
