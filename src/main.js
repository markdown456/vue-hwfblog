import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'

//导入全局样式
import './assets/CSS/global.css'
import axios from 'axios'
//将axios挂载在实例原型中
Vue.prototype.$http = axios;
// 配置请求的跟路径
axios.defaults.baseURL = 'http://localhost:8081/'



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')