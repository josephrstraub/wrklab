import { connect } from 'react-redux'
import { changeActiveProduct } from '../actions'
import _ from 'lodash'
import Products from '../components/Products'

const mapStateToProps = (state) => {
  return {
    products: state.products.filter(product => product.category === (state.activeProductsCategory || product.category) ),
    activeProductId: state.activeProductId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveProduct: (id) => {
      dispatch(changeActiveProduct(id))
    }
  }
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer
