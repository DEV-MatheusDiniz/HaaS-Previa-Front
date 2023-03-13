import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  // Previas
  {
    path: '/',
    name: 'Previas',
    component: () => import('../views/PreviasView.vue')
  },

  // Previa
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
