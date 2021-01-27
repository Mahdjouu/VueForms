import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import formChercheur from '../views/formChercheur.vue'
import formNomOuvrage from '../views/formNomOuvrage.vue'
import formOuvrage from '../views/formOuvrage.vue'
import formPublication from '../views/formPublication.vue'
import formSysteme from '../views/formSysteme.vue'
import About from '../views/About.vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueRouter)
Vue.use(VueFormGenerator)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formChercheur',
    name: 'formChercheur',
    component: formChercheur
  },
  {
    path: '/formNomOuvrage',
    name: 'formNomOuvrage',
    component: formNomOuvrage
  },
  {
    path: '/formOuvrage',
    name: 'formOuvrage',
    component: formOuvrage
  },
  {
    path: '/formPublication',
    name: 'formPublication',
    component: formPublication
  },
  {
    path: '/formSysteme',
    name: 'formSysteme',
    component: formSysteme
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
