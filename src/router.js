import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/my-Home.vue'
import Register from './components/my-Register.vue'
import Login from './components/my-Login.vue'

Vue.use(VueRouter)



const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
})

export default router