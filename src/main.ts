import App from './App.vue'
import Default from './layouts/default/Default.vue'
import LayoutHome from './layouts/LayoutHome.vue'
import router from './router'
import { Quasar } from 'quasar'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import icon libraries
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.component('LayoutDefault', Default)
app.component('LayoutHome', LayoutHome)
app.use(Quasar, {
  plugins: {}
})
app.use(createPinia())
app.use(router)

app.mount('#app')
