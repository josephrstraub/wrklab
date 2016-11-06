import React, { Component } from 'react'
import Header from './Header'
import Masonry from './Masonry'
import DynamicMenu from './DynamicMenu'
import ModalWindow from './ModalWindow'
import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap'

class Products extends Component {
  render() {
    return (
      <Grid fluid={true} style={{height: "100%", backgroundColor: "white"}}>
        <Row>
          <Col xs={6} xsOffset={3}>
            <Masonry />
          </Col>
          <Col xs={2} xsOffset={1}>
            <DynamicMenu items={[]} header1={"PRODUCTS"} header2={""}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Products
