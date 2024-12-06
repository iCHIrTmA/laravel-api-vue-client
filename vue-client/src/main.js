import './assets/main.css'
import axios from 'axios'
import useAuth from '@/composables/useAuth';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const { attempt } = useAuth();

const app = createApp(App)

attempt().then(() => {
    app.use(router)
    app.mount('#app')
});
