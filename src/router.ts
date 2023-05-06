import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/first', component: () => import("./views/First.vue") },
    { path: '/second', component: () => import("./views/Second.vue") },
    { path: '/third', component: () => import("./views/Third.vue") },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router