import React from 'react'
import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap'

const buttonStyles = {
  modal: {
    color: "white",
    backgroundColor: "#FF1FA9"
  },
  landing: {

  }
}

const modalButton = (showModal, toggleModal) => {
  if (showModal) {
    return (
      <Col xs={2} xsOffset={10}>
        <Button
          style={buttonStyles.modal}
          onClick={toggleModal}>
          {showModal ? "SUBMIT" : "TALK TO US"}
        </Button>
      </Col>
    )
  }
}

export const LandingFooter = ({ showModal, toggleModal }) => (
  <Grid fluid className="footer" style={{position: "fixed", bottom: "40px", width: "100%", zIndex: "1100"}}>
    <Row>
      <Col xs={3}>
        <h3 style={{textAlign: "right", color: "#FF1FA9"}}>----- 01 Work better</h3>
        <p style={{textAlign: "right", color: "rgba(0,0,0,.35)"}}>We create amazing collaborative work places for awesome people.</p>
      </Col>
      <Col xs={8} md={6} mdOffset={3} className="col-2">
        <ButtonGroup className="button-group" bsSize="large">
          <Button onClick={toggleModal}>REQUEST CONTACT</Button>
          <Button>WHAT WE DO</Button>
          <Button>WORKS</Button>
        </ButtonGroup>
      </Col>
      {modalButton(showModal, toggleModal)}
    </Row>
  </Grid>
)

export const DefaultFooter = ({ showModal, toggleModal }) => (
  <Grid fluid className="footer" style={{position: "fixed", bottom: "40px", width: "100%", zIndex: "1100"}}>
    <Row>
      <Col xs={2} xsOffset={10}>
        <Button
          style={buttonStyles.modal}
          onClick={toggleModal}>
          {showModal ? "SUBMIT" : "TALK TO US"}
        </Button>
      </Col>
    </Row>
  </Grid>
)
