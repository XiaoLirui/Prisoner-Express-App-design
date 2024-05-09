import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '@/views/Search.vue'
import PoetryView from '@/views/PoetryView.vue'
import ArtView from '@/views/ArtView.vue'
import Detail from '@/views/Detail.vue'
import ProgramView from '@/views/ProgramView.vue'
import JournalView from '@/views/JournalView.vue'
import Saved from '@/views/Saved.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/search',
      name:'search',
      component: Search
    },{
      path:'/poetry',
      name:'PoetryView',
      component: PoetryView
    },{
      path:'/artView',
      name:'ArtView',
      component: ArtView
    },{
      path:'/newsletter',
      name:'Detail',
      component: Detail
    },{
      path:'/program',
      name:'ProgramView',
      component: ProgramView
    },{
      path:'/journal',
      name:'JournalView',
      component: JournalView
    },{
      path:'/saved',
      name:'saved',
      component: Saved
    }
  ]
})

export default router
