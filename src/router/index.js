import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Previas',
    component: () => import('../views/PreviasView.vue')
  },

  {
    path: '/previa',
    name: 'Previa',
    component: () => import('../views/PreviaView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
