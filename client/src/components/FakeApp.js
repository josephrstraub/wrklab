import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProcesses, getProducts, getVisions, toggleMainMenu, toggleModal } from '../actions'
import FakeHeader from './FakeHeader'
import VisibleFooter from '../containers/VisibleFooter'
import MainMenu from './MainMenu'

const getBackgroundColor = (location, activeProcess, showMainMenu) => {
  if (showMainMenu) {
    return "white"
  }
  switch(location) {
    case '/featured':
      return "#0C4352"
    case '/vision':
      return "#4F1452"
    case '/process':
      let colors = ["#4F1452", "#19234D", "#660033", "#212801", "#19234D", "#242424", "#003F52"]
      let colorIndex = (activeProcess + colors.length) % colors.length
      return colors[colorIndex]
    default:
      return "white"
  }
}

class FakeApp extends Component {
  componentDidMount() {
    this.props.getProcesses()
    this.props.getProducts()
    this.props.getVisions()
  }
  render() {
    let { location, children, showMainMenu, showModal, activeProcess, toggleMainMenu, toggleModal } = this.props
    return (
      <div style={{height: "100vh", backgroundColor: getBackgroundColor(location, activeProcess, showMainMenu)}}>
        <FakeHeader
          location={location}
          handleClick={showModal ? toggleModal : toggleMainMenu} />
        {showMainMenu ? <MainMenu /> : children}
        <VisibleFooter />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location.pathname,
    activeProcess: state.activeProcess,
    showMainMenu: state.showMainMenu,
    showModal: state.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts())
    },
    getProcesses: () => {
      dispatch(getProcesses())
    },
    getVisions: () => {
      dispatch(getVisions())
    },
    toggleMainMenu: () => {
      dispatch(toggleMainMenu())
    },
    toggleModal: () => {
      dispatch(toggleModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FakeApp)
