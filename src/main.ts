import { createApp } from 'vue'
import './style.css'
import './layout.scss'
import App from './App.vue'
import router from './router'
import Card from './components/Card.vue'
import HelloWorld from './components/HelloWorld.vue'
import NumBox from './components/NumBox.vue'
import PieBox from './components/PieBox.vue'
import AreaBox from './components/AreaBox.vue'

createApp(App).component('Card', Card).use(router).mount('#app')
