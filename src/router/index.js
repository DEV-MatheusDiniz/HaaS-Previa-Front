import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  // Faturamento Previas
  {
    path: '/',
    name: 'Previas',
    component: () => import('../views/PreviasView.vue')
  },

  // Faturamento Previa
  {
    path: '/previa/:idPrevia',
    name: 'Previa',
    component: () => import('../views/PreviaView.vue')
  },

  // Faturamento Item Conteudo
  {
    path: '/faturamentoItemConteudo/:idItem',
    name: 'FaturamentoItemConteudo',
    component: () => import('../views/FaturamentoItemConteudoView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
