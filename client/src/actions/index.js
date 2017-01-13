import { getActiveProduct, getVisibleColorChips, activeProductHasModules } from '../reducers/products'
import axios from 'axios'
import _ from 'lodash'

export const getProducts = () => {
  return axios.get('/api/products')
    .then(response => ({
      type: 'RECEIVE_PRODUCTS',
      products: response.data
    }))
    .catch(error => console.log(error))
}

export const getProcesses = () => {
  return axios.get('/api/processes')
    .then(response => ({
      type: 'RECEIVE_PROCESSES',
      processes: response.data
    }))
    .catch(error => console.log(error))
}

export const getUserLocation = () => {
  return axios.post('http://freegeoip.net/json', {dataType: 'jsonp'})
    .then(response => ({
      type: 'RECEIVE_USER_LOCATION',
      location: response.json.country_code
    }))
    .catch(error => console.log(error))
}

export const getVisions = () => {
  return axios.get('/api/visions')
    .then(response => ({
      type: 'RECEIVE_VISIONS',
      visions: response.data
    }))
    .catch(error => console.log(error))
}

export const getFeaturedProjects = () => {
  return axios.get('/api/featured-projects')
    .then(response => ({
      type: 'RECEIVE_FEATURED_PROJECTS',
      featuredProjects: response.data
    }))
    .catch(error => console.log(error))
}

export const changeActiveProductsCategory = (category, setFirstChildAsActive = true) => (dispatch, getState) => {
  dispatch({ type: 'SET_ACTIVE_PRODUCTS_CATEGORY', category })
  if (setFirstChildAsActive) {
    let firstProduct = _.find(getState().products.data, {category})
    dispatch(changeActiveProduct(firstProduct._id))
  }
}

export const changeActiveProduct = (productId) => (dispatch, getState) => {
  dispatch({type: 'SET_ACTIVE_PRODUCT_ID', productId })
  let activeProduct = getActiveProduct(getState())
  let { color, size, finish } = activeProduct.variants[0]
  if (!activeProductHasModules(getState())) {
    dispatch(changeActiveColor(color))
    dispatch({ type: 'SET_ACTIVE_SIZE', size })
    dispatch(changeActiveFinish(finish))
  }
}

export const resetProducts = () => ({
  type: 'RESET_PRODUCTS'
})

export const changeActiveProductImage = (index, incremental = true) => 
  (dispatch, getState) => {
    index = incremental ? getState().products.activeImageIndex + index : index
    dispatch({ type: 'SET_ACTIVE_PRODUCT_IMAGE', index })
  }

export const changeActiveModule = (module) => 
  (dispatch, getState) => {
    dispatch({ type: 'SET_ACTIVE_MODULE', module })
    dispatch(changeActiveProductImage(0, false))
    let activeProduct = getActiveProduct(getState())
    let color = _.find(activeProduct.variants, {module}).color || ""
    let size = _.find(activeProduct.variants, {module}).size || ""
    let finish = _.find(activeProduct.variants, {module}).finish || ""
    dispatch(changeActiveColor(color))
    dispatch(changeActiveSize(size))
    dispatch(changeActiveFinish(finish))
  }

export const setHoveredProduct = (productId) => ({
  type: 'SET_HOVERED_PRODUCT',
  productId
})

export const changeActiveColor = (color = "") => ({
  type: 'SET_ACTIVE_COLOR',
  color 
})

export const changeActiveFinish = (finish = "") => ({
  type: 'SET_ACTIVE_FINISH',
  finish
})

export const changeActiveSize = (size = "") =>
  (dispatch, getState) => {
    dispatch({ type: 'SET_ACTIVE_SIZE', size })
    let activeColorChip = _.pickBy({
      color: getState().products.activeColor,
      finish: getState().products.activeFinish
    })
    let variantColorChips = getVisibleColorChips(getState())
    if (!_.some(variantColorChips, (chip) => _.isEqual(activeColorChip, chip))) {
      dispatch({ type: 'SET_ACTIVE_COLOR', color: variantColorChips[0].color })
      dispatch({ type: 'SET_ACTIVE_FINISH', finish: variantColorChips[0].finish })
    }
  }

export const changeActiveProcess = (processId) => ({
  type: 'SET_ACTIVE_PROCESS',
  processId
})

export const changeActiveVision = (visionId) => ({
  type: 'SET_ACTIVE_VISION',
  visionId
})

export const changeActiveFeaturedProject = (projectId) => ({
  type: 'SET_ACTIVE_FEATURED_PROJECT',
  projectId
})

export const changeActiveFeaturedProjectImage = (increment) => ({
  type: 'SET_ACTIVE_FEATURED_PROJECT_IMAGE',
  increment
})

export const toggleMainMenu = () => ({
  type: 'TOGGLE_MAIN_MENU'
})

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL'
})

export const resetModals = () => ({
  type: 'RESET_MODALS'
})

export const updateContactForm = (event, updatedField) => ({
  type: 'UPDATE_FORM',
  updatedField: {
    [updatedField]: {
      value: event.target.value,
      isValid: updatedField !== "message" ? event.target.value.length > 0 : true
    }
  }
})

export const failedSubmit = () => ({
  type: 'FAILED_SUBMIT'
})

export const submitContactForm = (formData) => (dispatch, getState) => {
  return axios.post('/send', formData).then(response => {
    setTimeout(() => {
      if (getState().modalIsVisible) { dispatch({ type: 'TOGGLE_MODAL' }) }
      dispatch({ type: 'RESET_FORM' })
    }, 4000)
  })
}
