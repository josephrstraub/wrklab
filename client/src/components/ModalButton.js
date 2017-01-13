import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleModal, submitContactForm, failedSubmit } from '../actions'
import _ from 'lodash'
import AlertContainer from 'react-alert'
import { Button } from 'react-bootstrap'

const defaultStyles = {
  color: "white",
  backgroundColor: "#FF1FA9",
  height: "49px",
  width: "163px",
  borderRadius: "20px",
  fontSize: "15px",
  fontWeight: 200,
  zIndex: 1100
}

const alertOptions = {
  offset: 14,
  position: 'top right',
  theme: 'light',
  time: 5000,
  transition: 'fade'
}

const showAlert = () => {
  alert.success("Thank you! We'll get back to you shortly...", {
    time: 5000,
    type: 'success',
    icon: <i className="fa fa-check" style={{color: "green"}} aria-hidden="true"></i>
  })
}

export const Alert = () => <AlertContainer ref={a => alert = a} {...alertOptions} />

class ModalButton extends Component {
  constructor() {
    super()
    this.state = { success: false, timeoutId: ""}
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillUnmount() {
    window.clearTimeout(this.state.timeoutId)
  }
  handleClick() {
    if (this.props.modalIsVisible && !this.state.success) {
      this.props.attemptFormSubmit(this.props.formData)
      if ( _.every(_.values(this.props.formData.fields), v => v.isValid) ) {
        this.setState({ success: true })
        let timeoutId = window.setTimeout(() => this.setState({ success: false }), 4000)
        this.setState({ timeoutId })
      }
    } else {
      this.props.toggleModal()
    }
  }
  render() {
    let { modalIsVisible, text, formData, customStyles, toggleModal, attemptFormSubmit } = this.props
    return (
      <div>
        <Button
          bsSize="large"
          className={this.state.success ? "btn-success" : ""}
          style={{...defaultStyles, ...customStyles}}
          onClick={this.handleClick}
        >
          {this.state.success ? "DONE" : text}
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  modalIsVisible: state.modalIsVisible,
  text: state.modalIsVisible ? "SUBMIT" : "TALK TO US",
  formData: state.contactForm,
  customStyles: ownProps.customStyles
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleModal: () => dispatch(toggleModal()),
  attemptFormSubmit: (formData) => {
    if ( _.every(_.values(formData.fields), v => v.isValid) ) {
      dispatch(submitContactForm(formData.fields))
      setTimeout(() => showAlert(), 2000)
    } else {
      dispatch(failedSubmit())
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalButton)
