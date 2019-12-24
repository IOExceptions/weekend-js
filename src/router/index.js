import Vue from 'vue'
import Router from 'vue-router'
import kun from '@/views/kun.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'kun',
      component: kun
    },
  ]
})
