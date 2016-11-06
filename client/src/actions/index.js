import axios from 'axios'

function camelCaseToDash( myStr ) {
    return myStr.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}

export const getProducts = () => {
  return axios.get('/api/products')
    .then(response => ({
      type: 'RECEIVE_PRODUCTS',
      products: response.data
    }))
}

export const getProcesses = () => {
  return axios.get('/api/processes')
    .then(response => ({
      type: 'RECEIVE_PROCESSES',
      processes: response.data
    }))
}

export const getVisions = () => {
  return axios.get('/api/visions')
    .then(response => ({
      type: 'RECEIVE_VISIONS',
      visions: response.data
    }))
}

export const changeActiveProductsCategory = (category) => ({
  type: 'SET_ACTIVE_PRODUCTS_CATEGORY',
  category
})

export const changeActiveProduct = (productId) => ({
  type: 'SET_ACTIVE_PRODUCT_ID',
  productId
})

export const changeActiveProcess = (index) => ({
  type: 'SET_ACTIVE_PROCESS',
  index
})

export const changeActiveVision = (index) => ({
  type: 'SET_ACTIVE_VISION',
  index
})

export const changeActiveList = (newList = []) => ({
  type: 'CHANGE_ACTIVE_LIST',
  newList
})

export const changeActiveListIndex = (newIndex) => ({
  type: 'CHANGE_ACTIVE_LIST_INDEX',
  newIndex
})

export const changeActiveSubIndex = (newIndex) => ({
  type: 'CHANGE_ACTIVE_SUB_INDEX',
  newIndex
})

export const toggleMainMenu = () => ({
  type: 'TOGGLE_MAIN_MENU'
})

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
})
