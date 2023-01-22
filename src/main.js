import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/bootstrap/bootstrap.min.css'
import './assets/bootstrap/bootstrap.min.js'
const app = createApp(App)

app.use(router)

app.mount('#app')