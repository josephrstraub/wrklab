import React from 'react'
import { changeActiveProcess, toggleModal } from '../actions'
import { connect } from 'react-redux'
import { LandingFooter, DefaultFooter } from '../components/Footer'

const VisibleFooter = ({ location, showModal, toggleModal }) => {
  switch(location) {
    case '/landing':
      return (
        <LandingFooter
          showModal={showModal}
          toggleModal={toggleModal} />
      )
    default:
      return (
        <DefaultFooter
          showModal={showModal}
          toggleModal={toggleModal} />
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location,
    processes: state.processes,
    activeProcess: state.activeProcess,
    showModal: state.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveProcess: (index) => {
      dispatch(changeActiveProcess(index))
    },
    toggleModal: () => {
      dispatch(toggleModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleFooter)
