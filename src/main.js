import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

require('normalize.css')
require('animate.css')
require('styles/global/index.less')

window.$config = {
  HOST: '',
}

if (location.hostname === 'localhost') {
  window.$config.HOST = 'http://xxxxx.xxxxx.com'
} else {
  window.$config.HOST = 'http://api.xxx.xxxxxx.com'
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !localStorage.adminToken) {
//     return next('/login')
//   }
//   if (to.name === 'login' && localStorage.adminToken) {
//     return next('/')
//   }
//   return next()
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
