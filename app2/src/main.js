import { createApp } from 'vue'
import routes from './route' // Assuming you'll create this file with your routes
import App from './App.vue'

const app = createApp(App)
app.use(routes) // Use the router
app.mount('#app') // Mount the app to the DOM
