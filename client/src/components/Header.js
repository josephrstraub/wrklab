import React, { Component } from 'react'
import { Link } from 'react-router'
import Logo from './Logo'
import { Grid, Row, Col, Nav, NavItem, ButtonGroup, Button } from 'react-bootstrap'
import '../styles/Header.css'

class Header extends Component {
  handleCircleClick = () => {
    if (this.props.showModal) {
      this.props.toggleModal()
    } else {
      this.context.router.push("/main-menu")
    }
  }
  handleClick(index, item) {
    this.props.changeActiveListIndex(index)
    switch(item) {
      case 'CONTACT':
        this.props.toggleModal()
        break
      case 'VISION':
        this.context.router.push("/vision")
        break
      case 'WORKS':
        this.context.router.push("/products")
        break
    }
  }
  render() {
    let { navItems, subNavItems, activeItem, inactiveColor, activeColor, textColor } = this.props
    console.log(subNavItems)
    const activeStyles = {
      backgroundColor: activeColor ? activeColor : "inherit",
      color: textColor ? textColor : "#FF1FA9"
    }
    const inactiveStyles = {
      backgroundColor: inactiveColor,
      color: textColor ? textColor : "white"
    }
    let buttons = navItems.map((item, index) => (
      <Button
        key={index}
        style={index === activeItem ? activeStyles : inactiveStyles}
        onClick={this.handleClick.bind(this, index, item)}>
        {item}
      </Button>
    ))
    let subButtons = () => {
      if (subNavItems) {
        return subNavItems.map((item, index) => (
          <Button
            key={index}
            style={index === activeItem ? activeStyles : inactiveStyles}
            onClick={this.handleClick.bind(this, index, item)}>
            {item}
          </Button>
        ))
      }
    }
    return (
      <Row className="header">
        <Col className="logo-container" xs={2}>
          <Link to="/"><Logo /></Link>
        </Col>
        <Col xs={8}>
          <ButtonGroup>{buttons}</ButtonGroup>
          <br/>
          <ButtonGroup style={{borderTop: "2px solid #FF1FA9"}}>{subButtons()}</ButtonGroup>
        </Col>
        <Col xs={2}>
          <div className="circle" onClick={this.handleCircleClick}>
            <div className="line first"></div>
            <div className="line second"></div>
            <div className="line third"></div>
          </div>
        </Col>
      </Row>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Header
