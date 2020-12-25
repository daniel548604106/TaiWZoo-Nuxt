import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
// fas
import {
  faSearch,
  faBell,
  faBars,
  faQuestionCircle,
  faCheck,
  faUserCircle,
  faEnvelope,
  faLock,
  faPlus,
  faTimes,
  faBookmark,
  faPlay,
  faStar,
  faUserFriends,
  faCommentAlt,
  faShareAlt,
  faTag,
  faSortDown,
  faCaretDown,
  faThumbsUp,
  faSearchLocation,
  faUserGraduate,
  faTools,
  faCube,
  faBookOpen,
  faArrowRight,
  faArrowLeft,
  faArrowCircleLeft,
  faArrowCircleRight,
  faCaretUp,
  faInbox,
  faAngleUp,
  faReply,
  faTrash,
  faBook,
  faCode,
  faExclamationCircle,
  faShoppingCart,
  faCheckCircle,
  faSortUp,
  faFile,
  faLink,
  faCaretRight,
  faEdit,
  faUser,
  faUserPlus,
  faEye,
  faImages,
  faChevronLeft,
  faExpandArrowsAlt,
  faEyeSlash,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
// far
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons'
// fab
import { faFacebookSquare, faLine, faTwitterSquare, faLinkedin, faGithubSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faEdit,
  faCode,
  faBook,
  faSearch,
  faSearchLocation,
  faBell,
  faPlus,
  faChevronLeft,
  faQuestionCircle,
  faCheck,
  faUserCircle,
  faEnvelope,
  faLock,
  faImages,
  faTimes,
  faUserPlus,
  faEllipsisV,
  faShareAlt,
  faArrowLeft,
  faArrowRight,
  faArrowCircleLeft,
  faArrowCircleRight,
  faBookmark,
  farBookmark,
  faPlay,
  faStar,
  faUserFriends,
  faCommentAlt,
  faShareAlt,
  faFacebookSquare,
  faLine,
  faTwitterSquare,
  faLinkedin,
  faTag,
  faUser,
  faEye,
  faCaretDown,
  faThumbsUp,
  faUserGraduate,
  faTools,
  faSortDown,
  faCube,
  faBookOpen,
  faCaretUp,
  faInbox,
  faAngleUp,
  faReply,
  faTrash,
  faChevronLeft,
  faGithubSquare,
  faGoogle,
  faExclamationCircle,
  faShoppingCart,
  faCheckCircle,
  faSortUp,
  faFile,
  faLink,
  faCaretRight,
  faBars,
  faLink,
  faExpandArrowsAlt,
  faEyeSlash
)
// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
