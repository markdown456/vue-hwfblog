import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/my-Home.vue'
import Register from './components/my-Register.vue'
import Login from './components/my-Login.vue'
import Notes from './components/my-Notes.vue'
import Common from './components/my-Common.vue'
import Article from './components/my-Article.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/common' },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        {
            path: '/common',
            component: Common,
            children: [
                { path: '/home', component: Home },
                { path: '/notes', component: Notes },
                { path: '/article/:id/:type', component: Article },
            ]
        }


    ]
})

export default router