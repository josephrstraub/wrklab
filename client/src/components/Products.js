import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Masonry from './Masonry'
import DynamicMenu from './DynamicMenu'
import ModalWindow from './ModalWindow'
import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap'

class Products extends Component {
  componentDidMount() {
    this.props.changeActiveListIndex(0)
  }
  render() {
    let { activeListIndex, showModal, changeActiveListIndex, toggleModal } = this.props
    let navItems = ["DESKS", "SOFAS", "ALCOVE", "PARTITIONS", "STORAGE", "LIGHTING"]
    return (
      <Grid fluid={true} style={{height: "100%", backgroundColor: "white"}}>
        <Header navItems={navItems} showModal={showModal} toggleModal={toggleModal} activeColor="#FF1FA9" inactiveColor={"#F6F5F7"} textColor="black"/>
        <Row>
          <Col xs={6} xsOffset={3}>
            <Link to="/product"><Masonry /></Link>
          </Col>
          <Col xs={2} xsOffset={1}>
            <DynamicMenu items={[]} header1={"PRODUCTS"} header2={""}/>
          </Col>
        </Row>
        <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
          <Col xs={2} xsOffset={10} style={{zIndex: "1100"}}>
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

export default Products
