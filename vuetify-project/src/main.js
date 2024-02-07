/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
// import router from './components/router/index'

// Vue.config.productionTip = false

// new Vue({
// 	router,
// 	render, h => h(App),
// }).$mount('#app')
// ;

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
