import { isVue2 } from 'vue-demi'
import { createApp } from 'vue3'
import { createApp as Vue2 } from '@vue/composition-api'
import './style.css'
import App from './App.vue'
if (isVue2) {
  const app = Vue2(App)
  app.mount('#app')
} else {
  const app = createApp(App)
  app.mount('#app')
}
