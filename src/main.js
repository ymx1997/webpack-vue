// import es6的模块化-导入 （对比理解nodejs中的require）
import Vue from 'vue'
import App from './components/app.vue'
// 引入css
import './css/index.css'
new Vue({
  render(h) {
    return h(App)
  },
}).$mount("#app")