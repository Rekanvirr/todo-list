import { createRouter, createWebHistory } from 'vue-router'
import KontaktView from '../views/KontaktView.vue'
import AboutView from '../views/AboutView.vue'
import NotesView from '../views/NotesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/kontakt',
      name: 'kontakt',
      component: KontaktView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView
    }
  ]
})

export default router
