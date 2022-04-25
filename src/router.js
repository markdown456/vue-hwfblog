import Vue from 'vue'
import VueRouter from 'vue-router'



//路由懒加载
//后台管理页面
const Admin = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/admin/admin-Home.vue')
const Introduction = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/admin/admin-Introduction.vue')
const Articlelist = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/admin/admin-Articlelist.vue')
const Edit = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/admin/admin-Edit.vue')
const Label = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/admin/admin-Label.vue')



// import Login from './components/my-Login.vue'
const Login = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/my-Login.vue')
    // import Register from './components/my-Register.vue'
const Register = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/my-Register.vue')
    // import Home from './components/my-Home.vue'
const Home = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/my-Home.vue')
    // import Common from './components/my-Common.vue'
const Common = () =>
    import ( /* webpackchunkName: "login_register_home_common"*/ './components/my-Common.vue')

// import Notes from './components/my-Notes.vue'
const Notes = () =>
    import ( /* webpackchunkName: "notes_article"*/ './components/my-Notes.vue')
    // import Article from './components/my-Article.vue'
const Article = () =>
    import ( /* webpackchunkName: "notes_article"*/ './components/my-Article.vue')
const Comment = () =>
    import ( /* webpackchunkName: "notes_article"*/ './components/my-Comment.vue')


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/admin',
            component: Admin,
            children: [
                { path: '/introduction', component: Introduction },
                { path: '/articlelist', component: Articlelist },
                { path: '/edit', component: Edit },
                { path: '/label', component: Label },
            ]
        },

        { path: '/login', component: Login },
        { path: '/register', component: Register },
        {
            path: '/common',
            component: Common,
            children: [
                { path: '/home', component: Home },
                { path: '/notes', component: Notes },
                {
                    path: '/article/:id',
                    components: {
                        default: Article,
                        comment: Comment
                    }
                    // children: [
                    //     { path: '/comment', component: Comment }

                    // ]
                },
            ]
        }


    ]
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location) {
    undefined
    return routerPush.call(this, location).catch(error => error)
}


export default router