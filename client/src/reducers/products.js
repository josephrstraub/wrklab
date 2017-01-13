import { createSelector } from 'reselect'
import _ from 'lodash'

const initialState = {
  data: [],
  activeCategory: "",
  activeProductId: "",
  activeImageIndex: 0,
  activeModule: "",
  activeColor: "",
  activeFinish: "",
  activeSize: "",
  hoveredProductId: ""
}

export const products = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        data: action.products
      }
    case 'SET_ACTIVE_PRODUCTS_CATEGORY':
      return {
        ...state,
        activeCategory: action.category
      }
    case 'SET_ACTIVE_PRODUCT_ID':
      return {
        ...initialState,
        data: state.data,
        activeProductId: action.productId,
        activeCategory: _.find(state.data, {_id: action.productId}).category
      }
    case 'SET_ACTIVE_PRODUCT_IMAGE':
      return {
        ...state,
        activeImageIndex: action.index
      }
    case 'SET_ACTIVE_MODULE':
      return {
        ...state,
        activeModule: action.module
      }
    case 'SET_ACTIVE_COLOR':
      return {
        ...state,
        activeColor: action.color
      }
    case 'SET_ACTIVE_FINISH':
      return {
        ...state,
        activeFinish: action.finish
      }
    case 'SET_ACTIVE_SIZE':
      return {
        ...state,
        activeSize: action.size
      }
    case 'SET_HOVERED_PRODUCT':
      return {
        ...state,
        hoveredProductId: action.productId
      }
    case 'RESET_PRODUCTS':
      return {
        ...initialState,
        data: state.data
      }
    default:
      return state
  }
}

const getProducts = (state) => state.products.data
const getActiveCategory = (state) => state.products.activeCategory
const getActiveProductId = (state) => state.products.activeProductId
const getActiveModule = (state) => state.products.activeModule
const getActiveColor = (state) => state.products.activeColor
const getActiveFinish = (state) => state.products.activeFinish
const getActiveSize = (state) => state.products.activeSize

export const getVisibleProducts = createSelector(
  [getActiveCategory, getProducts],
  (activeCategory, products) => {
    return products.filter(product => product.category === (activeCategory || product.category) )
  }
)

export const getActiveProduct = createSelector(
  [getActiveProductId, getProducts],
  (activeProductId, products) => {
    return products.filter(product => product._id === activeProductId).shift()
  }
)

export const activeProductHasModules = createSelector(
  [getActiveProduct],
  (product = {variants: [{}]}) => _.has(product.variants[0], 'module')
)

export const getActiveProductVariant = createSelector(
  [getActiveProduct, activeProductHasModules, getActiveModule, getActiveColor, getActiveFinish, getActiveSize],
  (product = {variants: []}, hasModules, activeModule, activeColor, activeFinish, activeSize) => {
    let moduleFilter = hasModules ? {module: activeModule} : {}
    let filters = {...moduleFilter, color: activeColor, finish: activeFinish, size: activeSize}
    filters = _.pickBy(filters)
    if ( Object.keys(filters).length ) {
      return _.find(product.variants, filters)
    }
  }
)

export const getActiveProductImages = createSelector(
  [getActiveProduct, getActiveProductVariant],
  (product = {images: []}, activeVariant) => {
    if ( !activeVariant ) {
      return product.images
    }
    return activeVariant.images || []
  }
)

export const getActiveVariantPrice = createSelector(
  [getActiveProductVariant],
  (activeVariant = { }) => activeVariant.price
)

export const getAllModules = createSelector(
  [getActiveProduct],
  (product = {variants: []}) => {
    let modulesArray = _.compact(product.variants.reduce((allModules, cur) => [...allModules, cur.module], []))
    return _.uniq(modulesArray)
  }
)

export const getVisibleColorChips = createSelector(
  [getActiveProduct, getActiveModule, getActiveSize],
  (product = {variants: []}, activeModule, activeSize) => {
    let colorChipsArray = product.variants
      .filter(variant => (variant.module || "") === activeModule && variant.size === activeSize)
      .reduce((allColorChips, cur) => [...allColorChips, {color: cur.color, finish: cur.finish}], [])
      .map(colorChip => _.pickBy(colorChip))
    return _.uniqWith(colorChipsArray, _.isEqual)
  }
)

export const getVisibleSizes = createSelector(
  [getActiveProduct, activeProductHasModules, getActiveModule, getActiveColor],
  (product = {variants: []}, hasModules, activeModule, activeColor) => {
    let moduleFilter = hasModules ? {module: activeModule} : {}
    let sizesArray = product.variants
      .filter(variant => (variant.module || "") === activeModule)
      .reduce((allSizes, cur) => [...allSizes, cur.size], [])
    return _.uniq(sizesArray).reduce((sizes, cur) => [
      ...sizes,
      {
        value: cur,
        isAvailable: _.some(product.variants, { ...moduleFilter, color: activeColor, size: cur })
      }
    ], [])
  }
)
