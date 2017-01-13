import React, { Component } from 'react'
import Masonry from './Masonry'
import DynamicMenu from './DynamicMenu'
import { Row, Col } from 'react-bootstrap'

const Products = (props) => (
  <Row>
    <Col xs={6} xsOffset={3} style={{marginTop: "50px"}}>
      <Masonry {...props}/>
    </Col>
    <Col xs={2} xsOffset={1}>
      <DynamicMenu
        items={[]}
        title="PRODUCTS"
        isActive={true}
        linkTo="/products"
        handleReset={props.resetProducts} />
    </Col>
  </Row>
)

export default Products
