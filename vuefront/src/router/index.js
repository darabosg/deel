import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter(to,from,next) {
            const isLoggedIn = localStorage.getItem('token')
            if (!isLoggedIn) { next({name: 'Login'}) }
            else {next()}
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router