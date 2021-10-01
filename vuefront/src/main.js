import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/main.scss')

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faLock)
library.add(faUser)
library.add(faUserLock)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
