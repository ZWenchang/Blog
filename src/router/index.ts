import { createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    
    {
        path:"/",
        component:()=>import('../components/home/index.vue')
    },
    {
        path:"/blog",
        component:()=>import('../components/blog/index.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes  
})  

export default router