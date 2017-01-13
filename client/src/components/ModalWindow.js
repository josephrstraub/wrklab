import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import '../styles/ModalWindow.css'

const invalidStyles = {
  border: "1px solid red"
}

class ModalWindow extends Component {
  render() {
    let fields = [
      {type: "text", placeholder: "Name", color: "red", name: "name"},
      {type: "email", placeholder: "Email", color: "blue", name: "email"},
      {type: "tel", placeholder: "Phone", color: "purple", name: "phone"},
      {type: "text", placeholder: "Organization Name", color: "green", name: "organization"},
      {type: "text", placeholder: "Message (optional)", color: "black", name: "message"}
    ]
    let listItems = fields.map((field, index) => {
      let fieldIsValid = this.props.contactForm.fields[field.name].isValid
      let submitFailed = this.props.contactForm.submitFailed
      return (
        <input
          key={index}
          className={field.color}
          type={field.type}
          placeholder={field.placeholder}
          style={!fieldIsValid && submitFailed ? invalidStyles : null}
          onChange={(event) => this.props.updateContactForm(event, field.name)}/>
      )
    })
    return (
      <Modal show={this.props.modalIsVisible}>
        <Modal.Header>
          <Modal.Title>Request a call back</Modal.Title>
          <p>Our team will explain everything to you</p>
        </Modal.Header>
        <Modal.Body>
          {listItems}
        </Modal.Body>
      </Modal>
    )
  }
}

export default ModalWindow
