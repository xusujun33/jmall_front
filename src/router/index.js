import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/home/index'
import Home from '../views/home/home'
import Goods from '../views/home/goods.vue'
import Login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: Index,
    children: [{
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/goods',
        name: 'Goods',
        component: Goods
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router