import React, { Component } from 'react'
import Header from './Header'
import Pager from './Pager'
import DynamicMenu from './DynamicMenu'
import Thumbnails from './Thumbnails'
import ModalWindow from './ModalWindow'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { products } from '../mock/products.json'

const h3Styles = {
  fontSize: "18px",
  color: "rgba(0,0,0,.3)",
  textAlign: "left"
}

const h4Styles = {
  fontSize: "14px",
  textAlign: "left"
}

class Product extends Component {
  render() {
    let { activeListIndex, showModal, changeActiveListIndex, toggleModal } = this.props
    let navItems = ["DESKS", "SOFAS", "ALCOVE", "PARTITIONS", "STORAGE", "LIGHTING"]
    let activeProduct = products[1]
    let subNavItems = products.filter(product => product.category === activeProduct.category).map(product => product.name)
    return (
      <Grid fluid={true} style={{height: "100%", backgroundColor: "white"}}>
        <Header navItems={navItems} subNavItems={subNavItems} showModal={showModal} toggleModal={toggleModal} activeColor="#FF1FA9" inactiveColor={"#F6F5F7"} textColor="black"/>
        <Row>
          <Col xs={2} style={{paddingTop: "6%", textAlign: "left"}}>
            <h3 style={h3Styles}>colors</h3>
            {activeProduct.availableColors.map(color => <div style={{height: "40px", width: "20px", backgroundColor: color, display: "inline-block", borderRadius: "10px", marginRight: "7px"}}></div>)}
            <h3 style={h3Styles}>sizes</h3>
            {activeProduct.availableSizes.map(size => <h4 style={h4Styles}>{size}</h4>)}
            <h3 style={h3Styles}>accessories</h3>
          </Col>
          <Col xs={6} xsOffset={1}>
            <Pager items={activeProduct.images} changeActiveListIndex={changeActiveListIndex}/>
          </Col>
          <Col xs={2} xsOffset={1}>
            <DynamicMenu items={[]} header1={"PRODUCTS"} header2={""}/>
          </Col>
        </Row>
        <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
          <Col xs={1}>
            <h3 style={h3Styles}>price</h3>
            <h4 style={{...h4Styles, fontSize: "22px"}}>{activeProduct.price}</h4>
          </Col>
          <Col xs={4} xsOffset={3}>
            <Thumbnails />
          </Col>
          <Col xs={2} xsOffset={2} style={{zIndex: "1100"}}>
            <Button
              bsSize="large"
              style={{color: "white", backgroundColor: "#FF1FA9", borderRadius: "30px", padding: "10px 35px"}}
              onClick={toggleModal}>
              {showModal ? "SUBMIT" : "TALK TO US"}
            </Button>
          </Col>
        </Row>
        <ModalWindow showModal={showModal}/>
      </Grid>
    )
  }
}

export default Product
