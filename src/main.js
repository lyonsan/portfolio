import { createApp } from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'

createApp(App).mount('#app')
createApp(App).use(smoothScroll)
