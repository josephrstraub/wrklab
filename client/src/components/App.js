import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getProcesses, getFeaturedProjects, getProducts, getVisions, toggleMainMenu, toggleModal, updateContactForm } from '../actions'
import _ from 'lodash'
import Header from './Header'
import VisibleFooter from '../containers/VisibleFooter'
import MainMenuContainer from '../containers/MainMenuContainer'
import ModalWindow from './ModalWindow'
import { Alert } from './ModalButton'

const getBackgroundColor = (location, activeProcess, mainMenuIsVisible) => {
  if (mainMenuIsVisible) {
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

class App extends Component {
  componentDidMount() {
    this.props.getProcesses()
    this.props.getProducts()
    this.props.getVisions()
    this.props.getFeaturedProjects()
  }
  handleWheel(event) {
    if (this.props.location === "/" && !this.props.mainMenuIsVisible && !this.props.modalIsVisible && event.deltaY > 0) {
      this.context.router.push("/process")
    }
  }
  render() {
    let { location, children, mainMenuIsVisible, modalIsVisible, contactForm, activeProcessIndex, toggleMainMenu, toggleModal, updateContactForm } = this.props
    return (
      <div
        className={location === "/" && !mainMenuIsVisible ? "landing" : ""}
        style={{backgroundColor: getBackgroundColor(location, activeProcessIndex, mainMenuIsVisible), height: "100vh"}}
        onWheel={this.handleWheel.bind(this)}>
        <Alert />
        <Grid fluid>
            <Header
              location={location}
              handleClick={modalIsVisible ? toggleModal : toggleMainMenu}
            />
            {mainMenuIsVisible ? <MainMenuContainer /> : children}
            {modalIsVisible ? <ModalWindow modalIsVisible={modalIsVisible} contactForm={contactForm} updateContactForm={updateContactForm} /> : null}
        </Grid>
        <Grid fluid style={{paddingRight: "15px", paddingLeft: "15px"}}><VisibleFooter location={location}/></Grid>
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location.pathname,
  activeProcessIndex: _.findIndex(state.processes.data, {_id: state.processes.activeProcessId}),
  mainMenuIsVisible: state.mainMenuIsVisible,
  modalIsVisible: state.modalIsVisible,
  contactForm: state.contactForm
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getProcesses: () => dispatch(getProcesses()),
  getFeaturedProjects: () => dispatch(getFeaturedProjects()),
  getVisions: () => dispatch(getVisions()),
  toggleMainMenu: () => dispatch(toggleMainMenu()),
  toggleModal: () => dispatch(toggleModal()),
  updateContactForm: (event, updatedField) => dispatch(updateContactForm(event, updatedField)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
