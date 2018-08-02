import Vue from 'vue'
import Router from 'vue-router'
import Show from './views/Show.vue'
import Setting from './views/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'show' }},
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/show/:categoryId',
      component: Show
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
