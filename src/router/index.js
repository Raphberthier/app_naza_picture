import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeApp',
    component: () => import('../views/homeApp.vue')
  },

]

const router = new VueRouter({
  routes
})



export default router