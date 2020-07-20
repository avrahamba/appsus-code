import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)
import { faTint } from '@fortawesome/free-solid-svg-icons'
library.add(faTint)
import { faEdit } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit)
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
library.add(faMapPin)
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
library.add(faWindowClose)
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
library.add(faPaintBrush)
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
library.add(faMailBulk)
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)
import { faInbox } from '@fortawesome/free-solid-svg-icons'
library.add(faInbox)
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
library.add(faPaperPlane)
import { faExpand } from '@fortawesome/free-solid-svg-icons'
library.add(faExpand)
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowUp)
import { faSave } from '@fortawesome/free-solid-svg-icons'
library.add(faSave)
import { faCompress } from '@fortawesome/free-solid-svg-icons'
library.add(faCompress)

Vue.component('font-awesome-icon', FontAwesomeIcon)
