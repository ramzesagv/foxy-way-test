import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import './styles/main.scss'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
