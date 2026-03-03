import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Posts from "@/views/posts.vue"
import notFound from "@/views/notFound.vue"

const routes = [
    { path: "/home", component: Home },
    { path: "/posts", component: Posts },
    { path: "/notFound", component: notFound }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router