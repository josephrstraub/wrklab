import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar';
import { Link } from 'react-router'
import { Row, Col, Button } from 'react-bootstrap'

class Content extends Component {
  constructor() {
    super()
    this.state = {atBottom: false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.state.atBottom) {
      this.context.scrollArea.scrollTop()
    } else {
      this.context.scrollArea.scrollBottom()
    }
    this.setState({atBottom: !this.state.atBottom})
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <Row>
          <Col xs={4}>
            <h3>hello@wrklab.co.in</h3>
            <div style={{marginBottom: "700px"}}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
          </Col>
          <Col xs={4}>
            <Link to="/process"><h3>Process</h3></Link>
            <Link to="/vision"><h3 style={{marginBottom: "700px"}}>Virtual Reality</h3></Link>
          </Col>
          <Col xs={4}>
            <h3>About Us</h3>
            <h3 style={{marginBottom: "700px"}}>FAQs</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h3>+91 987 310 9889</h3>
            <h3>12/14, East Patel Nagar</h3>
            <h3>New Delhi - 110008, India</h3>
          </Col>
          <Col xs={4}>
            <h3>T&C</h3>
            <h3>Privacy Policy</h3>
          </Col>
          <Col xs={4}>
            <Link to="/featured"><h3>Feautured Products</h3></Link>
            <Link to="/products"><h3>Products</h3></Link>
          </Col>
        </Row>
      </div>
    )
  }
}

Content.contextTypes = {
    scrollArea: React.PropTypes.object
};

export default Content
