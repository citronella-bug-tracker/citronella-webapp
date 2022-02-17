import { createWebHistory, createRouter } from "vue-router"

const Login = () => import('./components/Login.vue')
const Profile = () => import('./components/Profile.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: Profile
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
