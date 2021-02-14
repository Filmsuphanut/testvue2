import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Em from '../views/Em.vue'
import TB from '../views/testback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Em',
    name: 'Em',
    component: Em
  },
  {
    path: '/TestBack',
    name: 'TestBack',
    component: TB
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
