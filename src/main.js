import { createApp } from 'vue'
import App from './App.vue'
import smoothScroll from 'vue-smoothscroll'
/*import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe,faBlog,faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGlobe,faBlog,faBirthdayCake,faImage,faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare)

createApp.component('font-awesome-icon', FontAwesomeIcon)*/
createApp(App).mount('#app')
createApp.use(smoothScroll)
