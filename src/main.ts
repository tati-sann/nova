import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import http from "@/utils/http";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$http = http
app.config.globalProperties.$router = router

app.mount('#app')
