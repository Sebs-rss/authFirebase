import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Agrego router e indico que debe usarse
import router from './router';

// Agrego Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


createApp(App).use(router).mount('#app')
