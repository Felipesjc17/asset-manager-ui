import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CreateI18n from './i18n/CreateI18n'
import { createBootstrap } from 'bootstrap-vue-next'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(CreateI18n)
app.use(createPinia())
app.use(router)
app.use(createBootstrap({ components: true, directives: true }))

app.mount('#app')
