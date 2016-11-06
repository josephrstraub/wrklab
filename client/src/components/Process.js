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
  componentWillUnmount() {
    this.props.changeActiveProcess(0)
  }
  render() {
    let images = [brief, analysis, sketchDesign, finalDesign, vr3D, construction, upkeepService]
    let { processes, activeProcess, changeActiveProcess } = this.props
    return (
      <Grid fluid={true} style={{height: "100%"}}>
        <Row>
          <Col xs={2} style={{paddingTop: "6%"}}>
            <Sidebar items={processes} activeItem={activeProcess} itemType="PROCESS" />
          </Col>
          <Col xs={8}>
            <Pager
              imageUrl={processes[activeProcess] ? images[activeProcess] : null}
              items={processes}
              activeItem={activeProcess}
              handleClick={changeActiveProcess} />
          </Col>
          <Col xs={2}>
            <DynamicMenu
              items={processes}
              activeItem={activeProcess}
              text="PROCESS"
              isActive={true}
              handleClick={changeActiveProcess}/>
            <DynamicMenu
              items={[]}
              activeItem={null}
              text="VR DEMO"
              isActive={false}
              linkTo={"/vision"}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Process
