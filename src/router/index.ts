import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './route'
import { getToken } from '@/helpers'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !getToken()) next({ name: 'login' })
    else next()
})

export default router
