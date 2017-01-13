import React from 'react'
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { toggleModal, submitContactForm } from '../../actions'
import { connect } from 'react-redux'
import ModalButton from '../ModalButton'

const styles = {
  buttonGroup: {
    position: "relative"
  },
  h3: {
    position: "absolute",
    left: "70px",
    textAlign: "left",
    color: "#FF1FA9",
    margin: "0 10px"
  },
  line: {
    position: "absolute",
    top: "10px",
    left: 0,
    width: "50px",
    height: "2px",
    backgroundColor: "#FF1FA9"
  }
}

const LandingFooter = ({ modalIsVisible, toggleModal }, context) => (
  <Row className="footer">
    <Col xs={3}>
      <div style={{position: "relative", height: "26px"}}>
        <div style={styles.line}></div>
        <h3 style={styles.h3}>01 Work better</h3>
      </div>
      <p style={{textAlign: "left", color: "rgba(0,0,0,.35)"}}>We create amazing collaborative work places for awesome people.</p>
    </Col>
    <Col xs={8} md={6} mdOffset={3} className="col-2">
      <ButtonGroup className="button-group" bsSize="large" style={styles.buttonGroup}>
        <Button onClick={toggleModal}>REQUEST CONTACT</Button>
        <Button onClick={() => context.router.push("/process")}>WHAT WE DO</Button>
        <Button onClick={() => context.router.push("/products")}>WORKS</Button>
        { modalIsVisible ? <ModalButton customStyles={{position: "absolute", top: 0, right: 0}} /> : null }
      </ButtonGroup>
    </Col>
  </Row>
)

LandingFooter.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  modalIsVisible: state.modalIsVisible
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingFooter)
