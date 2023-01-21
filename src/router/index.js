import { createRouter, createWebHistory } from 'vue-router'
import Login from '../view/user/Auth/Login.vue'
import SignUp from '../view/user/Auth/SignUp.vue'
import AllArticle from '../view/user/AllArticle/AllArticle.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'AllArticle',
            component: AllArticle
        },


        {
            path: '/Login',
            name: 'Login',
            component: Login
        }, {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp
        },
    ]
})

export default router