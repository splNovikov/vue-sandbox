import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import Posts from "@/pages/Posts.vue";
import PostDetails from "@/pages/PostDetails.vue";
import About from "@/pages/About.vue";
import PostsWithStore from "@/pages/PostsWithStore.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/posts/:id',
        name: 'post-details',
        component: PostDetails
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts-with-store',
        component: PostsWithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;
