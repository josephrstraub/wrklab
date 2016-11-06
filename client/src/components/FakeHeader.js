import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import Logo from './Logo'
import VisibleNavBar from '../containers/VisibleNavBar'

const FakeHeader = ({ location, handleClick }) => (
  <Grid fluid>
    <Row className="header">
      <Col className="logo-container" xs={2}>
        <Link to="/"><Logo /></Link>
      </Col>
      <Col xs={8}>
        <VisibleNavBar location={location} />
      </Col>
      <Col xs={2}>
        <div className="circle" onClick={handleClick}>
          <div className="line first"></div>
          <div className="line second"></div>
          <div className="line third"></div>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default FakeHeader
