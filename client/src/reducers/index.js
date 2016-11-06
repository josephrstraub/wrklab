import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { processes, activeProcess } from './processes'
import { visions, activeVision } from './visions'
import { products, activeProductsCategory, activeProductId } from './products'
import { showMainMenu } from './main-menu'
import { showModal } from './modal'

const wrklabApp = combineReducers({
  processes,
  activeProcess,
  products,
  activeProductsCategory,
  activeProductId,
  visions,
  activeVision,
  showMainMenu,
  showModal,
  routing: routerReducer
})

export default wrklabApp
