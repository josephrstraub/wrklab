import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import HeaderCircle from './HeaderCircle'
import Logo from './Logo'
import VisibleNavBar from '../containers/VisibleNavBar'
import '../styles/Header.css'

const Header = ({ location, handleClick }) => (
  <Row className="header">
    <Col className="logo-container" xs={2}>
      <Logo />
    </Col>
    <Col xs={8} md={6} mdOffset={1}>
      <VisibleNavBar location={location} />
    </Col>
    <Col xs={2} mdOffset={1} style={{textAlign: "right"}}>
      <HeaderCircle />
    </Col>
  </Row>
)

export default Header
