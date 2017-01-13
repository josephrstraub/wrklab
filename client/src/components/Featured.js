import React, { Component } from 'react'
import Sidebar from './Sidebar'
import DynamicMenu from './DynamicMenu'
import '../styles/Process.css'
import { Row, Col } from 'react-bootstrap'
import Pager from './Pager'

const Featured = ({ projects, activeProject, projectIndex, imageUrl, leftArrowVisible, rightArrowVisible, changeImage, changeActiveFeaturedProject }) => (
  <Row>
    <Col xs={3} lg={2} style={{paddingTop: "6%"}}>
      <Sidebar item={activeProject} itemType="FEATURED" itemIndex={projectIndex} />
    </Col>
    <Col xs={6} lgOffset={1}>
      <Pager
        imageUrl={process.env.PUBLIC_URL + imageUrl}
        leftArrowVisible={leftArrowVisible}
        rightArrowVisible={rightArrowVisible}
        handleClick={changeImage} />
    </Col>
    <Col xs={2} xsOffset={1}>
      <DynamicMenu
        items={projects}
        activeId={activeProject._id}
        title="FEATURED"
        isActive={true}
        handleClick={changeActiveFeaturedProject}/>
      <DynamicMenu
        items={[]}
        activeId={null}
        title="PRODUCTS"
        isActive={false}
        linkTo={"/products"}/>
    </Col>
  </Row>
)

export default Featured
