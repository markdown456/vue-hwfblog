import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './plugins/element.js'
import store from './store'
//导入富文本编辑器

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


//导入全局样式
import './assets/CSS/global.css'
// import axios from 'axios'
//将axios挂载在实例原型中
Vue.prototype.$http = axios;
// 配置请求的跟路径
axios.defaults.baseURL = 'http://localhost:3000/'

//日期格式化
Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d}`
})

//将富文本编辑器注册为全局可用组件
Vue.use(VueQuillEditor)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')