import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { ButtonGroup, Button } from 'react-bootstrap'
import { changeActiveVision, changeActiveProductsCategory } from '../actions'
import _ from 'lodash'
import { NavBar, ProductsNavBar } from '../components/NavBar'

const getNavItems = (state, location) => {
  switch(location) {
    case '/products':
      return _.chain(state.products).map('category').uniq().value()
    case '/vision':
      return state.visions.map(vision => vision.name)
    default:
      return
  }
}

const VisibleNavBar = ({ items, location, activeCategory, activeVision, showMainMenu, changeActiveVision, changeCategory}) => {
  if (showMainMenu) {
    return (
      <ButtonGroup style={{backgroundColor: "#F5F5F5"}}>
        <Button>CONTACT</Button>
        <Link to="/vision"><Button>VISION</Button></Link>
        <Link to="/featured"><Button>WORKS</Button></Link>
      </ButtonGroup>
    )
  }
  switch(location) {
    case '/products':
      return (
        <ProductsNavBar
          items={items}
          activeItem={activeCategory}
          handleClick={changeCategory}/>
      )
    case '/vision':
      return (
        <NavBar
          items={items}
          activeItem={activeVision}
          handleClick={changeActiveVision}/>
      )
    default:
      return null
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: getNavItems(state, ownProps.location),
    location: ownProps.location,
    activeVision: state.activeVision,
    activeCategory: state.activeProductsCategory,
    showMainMenu: state.showMainMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category) => {
      dispatch(changeActiveProductsCategory(category))
    },
    changeActiveVision: (index) => {
      dispatch(changeActiveVision(index))
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleNavBar)
