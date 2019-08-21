import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/category',
            name: 'category',
            component: () => import('./views/Category.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./views/Cart.vue')
        },
        {
            path: '/order/submit',
            name: 'order.submit',
            component: () => import('./views/Order/Submit.vue')
        },
        {
            path: '/my',
            name: 'my',
            component: () => import('./views/My.vue')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('./views/Settings.vue')
        },
        {
            path: '/address',
            name: 'address.index',
            component: () => import('./views/Address/Index.vue')
        },
        {
            path: '/item/:id',
            name: 'item.detail',
            component: () => import('./views/Item/Detail.vue')
        }
    ]
})
