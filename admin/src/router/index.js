import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import HomeView from '../views/HomeView.vue'
import History from '../views/History.vue'
import Preview from '../views/Preview.vue'
import ContentNewsletter from '../views/ContentNewsletter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomeView
    },
    {
      path: '/app-content',
      name: 'app content',
      component: HomeView
    },{
      path: '/app-content/:key',
      name: 'Content Newsletter',
      component: ContentNewsletter
    },{
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})

export default router
