import { isVue2 } from 'vue-demi'
import { createApp } from 'vue3'
import Vue2 from 'vue2'
import './style.css'
import App from './App.vue'
if (isVue2) {
  const app = new Vue2({
    render: (h) => h(App)
  })
  app.$mount('#app')
} else {
  const app = createApp(App)
  app.mount('#app')
}
