import axios from 'axios'
import router from '@/router'
import { STATUS_CODE_SUCCESS, ACCESS_TOKEN, STATUS_CODE_UNAUTHORIZED } from '@/helpers'

axios.defaults.withCredentials = false

export const API_URL = import.meta.env.VITE_APP_API
const instance = axios.create({
    baseURL: API_URL,
})

instance.interceptors.request.use(
    function (config: any) {
        try {
            const token = localStorage.getItem(ACCESS_TOKEN)
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }
        } catch (error) {
            throw Error('')
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function (response) {
        if (response?.status !== STATUS_CODE_SUCCESS) return Promise.reject(response?.data)
        return response.data
    },
    function (error) {
        if (error?.response?.status === STATUS_CODE_UNAUTHORIZED || error.code === 'ERR_NETWORK') {
            localStorage.clear()
            return router.push({ name: 'login' })
        }
        if (error?.response?.data) {
            return Promise.reject(error?.response?.data)
        }
        return Promise.reject(error)
    }
)

export const setLocaleApi = (locale: string) => {
    instance.defaults.headers.common['lang'] = locale
}

export default instance
