import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './translation-config/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
