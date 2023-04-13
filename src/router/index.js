import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../components/posts/Posts.vue"
import Albums from "../components/albums/Albums.vue"
import Comments from "../components/comments/Comments.vue"
import Todos from "../components/todos/Todos.vue"
import Users from "../components/users/Users.vue"
import Photos from "../components/photos/Photos.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts
        },
        {
            path: "/albums",
            name: "albums",
            component: Albums
        },
        {
            path: "/comments",
            name: "comments",
            component: Comments
        },
        {
            path: "/todos",
            name: "todos",
            component: Todos
        },
        {
            path: "/users",
            name: "users",
            component: Users
        },
        {
            path: "/photos",
            name: "photos",
            component: Photos
        }
    ]
})

export default router