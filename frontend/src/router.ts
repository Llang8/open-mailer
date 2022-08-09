import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Home from './views/Home.vue'
import Test from './views/Test.vue'
import Login from './views/Login.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test, meta: { requiresAuth: true } },
    { path: '/login', component: Login, meta: { requiresAnonymous: true } }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    const currentUser = await getCurrentUser()

    if (to.meta.requiresAnonymous) {
        if (currentUser) {
            next('/')
        } else {
            next()
        }        
    }
    else if (to.meta.requiresAuth) {
        if (currentUser) {
            next()
        } else {
            alert('You can\'t access this route!')
            next('/login')
        }
    } else {
        next()
    }
})

export default router