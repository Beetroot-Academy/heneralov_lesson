import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: () => import('./views/AboutPage.vue')
            
        },
        {
            path: '/contact',
            component: () => import('./views/ContactPage.vue')
            
        },
        {
            path: '/faq',
            component: () => import('./views/FaqPage.vue')
            
        },
    ]
})