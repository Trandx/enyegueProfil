import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

// import tailwind css
import './assets/css/tailwind.css'

// import vueform css

import '@vueform/multiselect/themes/default.css';

import './assets/css/formCss.css'

createApp(App).use(router).mount('#app')
