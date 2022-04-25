import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //登录用户的信息
        loginForm: {
            email: '',
            password: '',
            //后台管理侧边栏，高亮显示的标签
            activePath: '',
        }
    },
    getters: {},
    mutations: {
        changeEmail(state, val) {
            state.loginForm.email = val
        }
    },
    actions: {},
    modules: {}
})