import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ImgView from '../views/ImgView.vue'
import ProjectView from '../views/ProjectView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/Blog', component: BlogView },
    { path: '/Img', component: ImgView },
    { path: '/Project', component: ProjectView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router



