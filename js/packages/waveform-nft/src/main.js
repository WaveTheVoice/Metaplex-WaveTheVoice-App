import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/tailwind.css'
import './assets/styles/app.scss'

createApp(App).use(router).mount('#app')
