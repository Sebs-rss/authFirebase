import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Agrego router e indico que debe usarse
import router from './router';

createApp(App).use(router).mount('#app')
