import NotFound from 'views/404.vue'
import Home from 'views/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '*', name: 'notfound', component: NotFound },
]

export default routes
