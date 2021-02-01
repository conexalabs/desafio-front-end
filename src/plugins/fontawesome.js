import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBuilding)
library.add(faArrowCircleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
