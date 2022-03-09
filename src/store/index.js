import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //登录用户的信息
        loginForm: {
            email: '',
            password: '',
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