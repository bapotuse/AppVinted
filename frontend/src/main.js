import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importer les icônes que tu veux
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'

// Ajouter les icônes à la librairie
library.add(faUser, faShoppingCart, faHeart)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
