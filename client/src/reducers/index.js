import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { processes } from './processes'
import { featuredProjects } from './featured-projects'
import { products } from './products'
import { mainMenuIsVisible } from './main-menu'
import { modalIsVisible } from './modal'
import { visions } from './visions'
import { contactForm } from './contact-form'

const wrklabApp = combineReducers({
  processes,
  products,
  visions,
  featuredProjects,
  mainMenuIsVisible,
  modalIsVisible,
  contactForm,
  routing: routerReducer
})

export default wrklabApp
