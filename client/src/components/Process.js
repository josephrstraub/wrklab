import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Pager from './Pager'
import DynamicMenu from './DynamicMenu'
import ProgressMeter from './ProgressMeter'
import ModalWindow from './ModalWindow'
import '../styles/Process.css'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import brief from '../img/processes/brief.png'
import analysis from '../img/processes/analysis.png'
import construction from '../img/processes/construction.png'
import finalDesign from '../img/processes/final-design.png'
import sketchDesign from '../img/processes/sketch-design.png'
import upkeepService from '../img/processes/upkeep-service.png'
import vr3D from '../img/processes/vr-3d.png'

class Process extends Component {
  render() {
    let images = [brief, analysis, sketchDesign, finalDesign, vr3D, construction, upkeepService]
    let colors = ["#4F1452", "#19234D", "#660033", "#212801", "#19234D", "#242424", "#003F52"]
    let { processes, activeListIndex, showModal, changeActiveListIndex, toggleModal } = this.props
    return (
      <Grid fluid={true} style={{height: "100%", backgroundColor: colors[activeListIndex]}}>
        <Header navItems={[]} showModal={showModal} toggleModal={toggleModal}/>
        <Row>
          <Col xs={2} style={{paddingTop: "6%"}}>
            <Sidebar items={processes} activeItem={activeListIndex} itemType="PROCESS" />
          </Col>
          <Col xs={8}>
            <Pager
              imageUrl={processes[activeListIndex] ? images[activeListIndex] : null}
              items={processes}
              activeListIndex={activeListIndex}
              changeActiveListIndex={changeActiveListIndex} />
          </Col>
          <Col xs={2}>
            <DynamicMenu items={processes} activeItem={activeListIndex} header1={"PROCESS"} header2={"VR DEMO"}/>
          </Col>
        </Row>
        <Row style={{position: "fixed", bottom: "40px", width: "100%"}}>
          <Col xs={4} xsOffset={4}>
            <ProgressMeter processes={processes} activeProcess={activeListIndex}/>
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

export default Process
