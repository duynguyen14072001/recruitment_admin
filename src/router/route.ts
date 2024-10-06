import * as Page from '@/views'
import { getToken } from '@/helpers'

const ifAuthenticated = (to: any, from: any, next: any) => {
    if (getToken()) {
        next()
        return
    }
    next('/login')
}

const ifNotAuthenticated = (to: any, from: any, next: any) => {
    if (!getToken()) {
        next()
        return
    }
    next('/')
}

export const routes: any = [
    {
        path: '/login',
        name: 'login',
        component: Page.Login,
        beforeEnter: ifNotAuthenticated,
    },
]
