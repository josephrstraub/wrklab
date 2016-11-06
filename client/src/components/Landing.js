import React, { Component } from 'react'
import Header from './Header'
import ModalWindow from './ModalWindow'
import { ButtonGroup, Button, Grid, Row, Col } from 'react-bootstrap'
import '../styles/Landing.css'

class Landing extends Component {
  changeRoute(route) {
    this.context.router.push(route)
  }
  render() {
    let { showModal, toggleModal } = this.props
    let button = () => {
      if (showModal) {
        return (
          <Row style={{position: "fixed", bottom: "40px", width: "100%", zIndex: "1100"}}>
            <Col xs={2} xsOffset={10}>
              <Button
                style={{color: "white", backgroundColor: "#FF1FA9"}}
                onClick={toggleModal}>
                {showModal ? "SUBMIT" : "TALK TO US"}
              </Button>
            </Col>
          </Row>
        )
      }
    }
    button = button()
    return (
      <Grid fluid={true} style={{height: "100%"}} className="landing">
        <Header
          navItems={[]}
          showModal={showModal}
          toggleModal={toggleModal} />
        <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
          <Col xs={3}>
            <h3>----- 01 Work better</h3>
            <p>We create amazing collaborative work places for awesome people.</p>
          </Col>
          <Col xs={8} md={6} mdOffset={3} className="col-2">
            <ButtonGroup className="button-group" bsSize="large">
              <Button onClick={toggleModal}>REQUEST CONTACT</Button>
              <Button onClick={this.changeRoute.bind(this, "/process")}>WHAT WE DO</Button>
              <Button onClick={this.changeRoute.bind(this, "/products")}>WORKS</Button>
            </ButtonGroup>
          </Col>
        </Row>
        {button}
        <ModalWindow showModal={showModal}/>
      </Grid>
    )
  }
}

Landing.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Landing
