import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import axios from "axios"
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT
if (import.meta.env.VITE_HACK_USER) {
    axios.defaults.headers = {'X-Email': import.meta.env.VITE_HACK_USER}
}

// // https://github.com/vitejs/vite/issues/6695#issuecomment-1069522995
// if (import.meta.hot) {
//     import.meta.hot.on('vite:beforeFullReload', () => {
//         throw '(skipping full reload)';
//     });
// }

const app = createApp(App)

app.use(router)

app.mount('#app')
