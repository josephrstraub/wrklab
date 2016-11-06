export const products = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products
    default:
      return state
  }
}

export const activeProductsCategory = (state = "", action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PRODUCTS_CATEGORY':
      return action.category
    default:
      return state
  }
}

export const activeProductId = (state = "", action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PRODUCT_ID':
      return action.productId
    default:
      return state
  }
}
