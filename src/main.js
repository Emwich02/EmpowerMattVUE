import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.use(router)

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

app.mount('#app')
