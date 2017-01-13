import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeActiveProductsCategory, changeActiveProduct, setHoveredProduct } from '../../actions'
import ReactTooltip from 'react-tooltip'
import _ from 'lodash'
import { ButtonGroup, Button } from 'react-bootstrap'

const styles = {
  active: {
    color: "#FF1FA9",
    backgroundColor: "white"
  },
  inactive: {
    backgroundColor: "#F5F5F5"
  }
}

class Products extends Component {
  handleClick(product) {
    this.props.changeActiveProduct(product)
    this.context.router.push(`/products/${product.name}`)
  }
  handleMouseEnter(productId) {
    if (!this.props.productFocus) {
      this.props.setHoveredProduct(productId)
    }
  }  
  handleMouseLeave() {
    if (!this.props.productFocus) {
      this.props.setHoveredProduct("")
    }
  }
  render() {
    let { categories, activeCategory, products, activeProductId, productFocus, changeCategory, changeActiveProduct, setHoveredProduct } = this.props
    let subNav = (
      <ButtonGroup style={{position: "absolute", top: "40px", left: "0"}}>
        {products.filter(product => product.category === activeCategory).map((product, index) => (
          <Button
            key={index}
            className={`nav-btn ${product._id !== activeProductId ? "hoverable" : "active-nav-btn"}`}
            onClick={this.handleClick.bind(this, product)}
            onMouseEnter={this.handleMouseEnter.bind(this, product._id)}
            onMouseLeave={this.handleMouseLeave.bind(this)}
            style={product._id === activeProductId ? styles.active : styles.inactive}
          >
            {product.name}
          </Button>
        ))}
      </ButtonGroup>
    )
    let mainNav = (
      <ButtonGroup justified>
        {categories.map((category, index) => (
          <ButtonGroup key={index}>
            <Button
              className={`nav-btn ${category !== activeCategory ? "hoverable" : "active-nav-btn"}`}
              onClick={changeCategory.bind(null, category, productFocus)}
              style={category === activeCategory ? styles.active : styles.inactive}
            >
              {category.toUpperCase()}
            </Button>
          </ButtonGroup>
        ))}
      </ButtonGroup>
    )
    return (
      <div style={{position: "relative", display: "inline-block"}}>
        {mainNav}
        <br/>
        {subNav}
      </div>
    )
  }
}

Products.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const Tooltips = ({ categories, activeCategory, products, activeProductId, productFocus, changeCategory, changeActiveProduct }, context) => {
  let buttons = categories.map((category, index) => {
    let tooltip = (
      <ReactTooltip class='extraClass' id={category} place="bottom" delayHide={300} effect='solid'>
        <ButtonGroup vertical>
          {products.filter(product => product.category === category).map((product, index) => (
            <Button
              key={index}
              className="hoverable"
              onClick={changeActiveProduct.bind(null, product, context)}
            >
              {product.name}
            </Button>
          ))}
        </ButtonGroup>
      </ReactTooltip>
    )
    return (
      <ButtonGroup key={index}>
        {tooltip}
        <Button
          data-tip
          data-for={category}
          key={index}
          className="nav-btn hoverable"
          onClick={changeCategory.bind(null, category, productFocus)}
        >
          {category.toUpperCase()}
        </Button>
      </ButtonGroup>
    )
  })
  return <ButtonGroup justified>{buttons}</ButtonGroup>
}

Tooltips.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const ProductsNavBar = (props) => props.activeCategory ? <Products {...props}/> : <Tooltips {...props}/>

const mapStateToProps = (state, ownProps) => ({
  categories: _.chain(state.products.data).map('category').uniq().value(),
  activeCategory: state.products.activeCategory,
  products: state.products.data,
  productFocus: ownProps.productFocus,
  activeProductId: state.products.activeProductId
})

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category, setFirstChildAsActive) => dispatch(changeActiveProductsCategory(category, setFirstChildAsActive)),
  changeActiveProduct: (product, context) => {
    dispatch(changeActiveProduct(product._id))
    if (context) {
      context.router.push(`/products/${product.name}`)
    }
  },
  setHoveredProduct: (productId) => dispatch(setHoveredProduct(productId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsNavBar)
