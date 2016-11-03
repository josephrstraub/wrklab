import React, { Component } from 'react'
import ProgressMeter from '../components/ProgressMeter'
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router'

class VisibleFooter extends Component {
  changeRoute(route) {
    this.context.router.push(route)
  }
  render() {
    let { filter, items, activeList, activeListIndex } = this.props
    switch(filter) {
      case 'process':
        return (
          <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
            <Col xs={4} xsOffset={4}>
              <ProgressMeter processes={activeList} activeProcess={activeListIndex}/>
            </Col>
            <Col xs={2} xsOffset={2}>
              <Button style={{color: "white", backgroundColor: "#FF1FA9"}}>TALK TO US</Button>
            </Col>
          </Row>
        )
      case 'products':
        return (
          <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
            <Col xs={2} xsOffset={10}>
              <Button style={{color: "white", backgroundColor: "#FF1FA9"}}>TALK TO US</Button>
            </Col>
          </Row>
        )
      case 'vision':
        return (
          <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
            <Col xs={2} xsOffset={10}>
              <Button style={{color: "white", backgroundColor: "#FF1FA9"}}>TALK TO US</Button>
            </Col>
          </Row>
        )
      default:
        return (
          <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
            <Col xs={3}>
              <h3>----- 01 Work better</h3>
              <p>We create amazing collaborative work places for awesome people.</p>
            </Col>
            <Col xs={8} md={6} mdOffset={3} className="col-2">
              <ButtonGroup className="button-group" bsSize="large">
                <Button>REQUEST CONTACT</Button>
                <Button onClick={this.changeRoute.bind(this, "/process")}>WHAT WE DO</Button>
                <Button>WORKS</Button>
              </ButtonGroup>
            </Col>
          </Row>
        )
    }
  }
}

VisibleFooter.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default VisibleFooter
