import React, { Component } from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import '../styles/ModalWindow.css'

class ModalWindow extends Component {
  render() {
    let fields = [
      {type: "text", placeholder: "Name", color: "red"},
      {type: "email", placeholder: "Email", color: "blue"},
      {type: "tel", placeholder: "Phone", color: "purple"},
      {type: "text", placeholder: "Organization Name", color: "green"},
      {type: "text", placeholder: "Message (optional)", color: "black"}
    ]
    let listItems = fields.map((field, index) => (
        <input key={index} className={field.color} type={field.type} placeholder={field.placeholder}/>
    ))
    return (
      <Modal show={this.props.showModal}>
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
