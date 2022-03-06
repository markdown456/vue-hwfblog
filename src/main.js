import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'

//导入全局样式
import './assets/CSS/global.css'



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')