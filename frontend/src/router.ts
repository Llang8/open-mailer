import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test }
]

export default createRouter({
    routes,
    history: createWebHashHistory()
})