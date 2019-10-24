import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout.vue'
import Login from '@/views/login.vue'
import Regin from '@/views/regin.vue'
import Index from '@/views/index.vue'
import Result from '@/views/result.vue'
import Page1 from '@/views/Page1.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: Layout,
            // 路由定义到children中，组件也引用至此处，内部套用layout模板，login&regin不需要模板
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/result',
                    name: 'result',
                    component: Result
                },
                {
                    path: '/page1',
                    name: 'page1',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                    component: Page1
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/regin',
            name: 'regin',
            component: Regin
        }
    ]
})