import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Pager from './Pager'
import DynamicMenu from './DynamicMenu'
import Thumbnails from './Thumbnails'
import ModalWindow from './ModalWindow'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import avidModernDesk from '../img/projects/avid-modern-desk.png'

class FeaturedProjects extends Component {
  render() {
    let { featuredProjects, activeListIndex, showModal, changeActiveListIndex, toggleModal } = this.props
    console.log(featuredProjects)
    return (
      <Grid fluid={true} style={{height: "100%", backgroundColor: "#0C4352"}}>
        <Header
          navItems={featuredProjects.map(project => project.name.toUpperCase())}
          showModal={showModal}
          activeItem={activeListIndex}
          inactiveColor={"#27697B"}
          changeActiveListIndex={changeActiveListIndex}
          toggleModal={toggleModal} />
        <Row>
          <Col xs={2} style={{paddingTop: "6%"}}>
            <Sidebar items={featuredProjects} activeItem={activeListIndex} itemType="FEATURED" />
          </Col>
          <Col xs={8}>
            <Pager
              imageUrl={avidModernDesk}
              items={featuredProjects}
              activeListIndex={activeListIndex}
              changeActiveListIndex={changeActiveListIndex} />
          </Col>
          <Col xs={2}>
            <DynamicMenu items={featuredProjects} activeItem={activeListIndex} header1={"FEATURED"} header2={"PRODUCTS"}/>
          </Col>
        </Row>
        <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
          <Col xs={4} xsOffset={4}>
            <Thumbnails />
          </Col>
          <Col xs={2} xsOffset={2} style={{zIndex: "1100"}}>
            <Button
              bsSize="large"
              style={{color: "white", backgroundColor: "#FF1FA9"}}
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

export default FeaturedProjects
