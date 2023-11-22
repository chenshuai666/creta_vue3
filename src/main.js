import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
//import directives from './directives'
import lazyload from './directives/lazyload.js'
import loading from './assets/loading.svg'

const app = createApp(App)
//directives(app)
app.use(lazyload, {
  default: loading
})
app.use(router).mount('#app')
