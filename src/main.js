import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios"
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT
if (import.meta.env.VITE_HACK_USER) {
    axios.defaults.headers = {'X-Forwarded-User': import.meta.env.VITE_HACK_USER}
}

const app = createApp(App)

app.use(router)

app.mount('#app')
