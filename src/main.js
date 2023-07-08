import './assets/main.scss'
import '@fontsource/jetbrains-mono' // Defaults to weight 400
import '@fontsource/jetbrains-mono/400.css' // Specify weight
import '@fontsource/jetbrains-mono/400-italic.css' // Specify weight and style
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Typer from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Typer)
app.mount('#app')
