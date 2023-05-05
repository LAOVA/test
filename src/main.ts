import { createApp } from 'vue'
import './style.css'
import './layout.css'
import App from './App.vue'
import router from './router'
import Card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'

createApp(App).component('Card', Card).use(router).mount('#app')
