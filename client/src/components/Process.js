import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Pager from './Pager'
import DynamicMenu from './DynamicMenu'
import '../styles/Process.css'
import { Row, Col } from 'react-bootstrap'

class Process extends Component {
  constructor() {
    super()
    this.state = { delayingScroll: false }
  }
  componentWillMount() {
    this.props.changeActiveProcess(this.props.activeProcess._id)
  }
  componentWillUnmount() {
    this.props.changeActiveProcess(this.props.processes[0]._id)
  }
  cycleProcesses(increment) {
    let { processes, processIndex, changeActiveProcess } = this.props
    let newProcessId = processes[processIndex + increment]._id
    changeActiveProcess(newProcessId)
  }
  handleWheel(event) {
    if (!this.state.delayingScroll) {
      this.setState({ delayingScroll: true })
      if (event.deltaY > 0 && this.props.processIndex !== 0) {
        this.cycleProcesses(-1)
      } else if (event.deltaY < 0 && this.props.processIndex < this.props.processes.length) {
        this.cycleProcesses(1)
      }
      setTimeout(() => this.setState({ delayingScroll: false }), 1000)
    }
  }
  render() {
    let { processes, activeProcess, processIndex, leftArrowVisible, rightArrowVisible, changeActiveProcess } = this.props
    return (
      <Row onWheel={this.handleWheel.bind(this)}>
        <Col xs={2} style={{paddingTop: "6%"}}>
          <Sidebar item={activeProcess} itemType="PROCESS" itemIndex={processIndex} />
        </Col>
        <Col xs={6} xsOffset={1}>
          <Pager
            imageUrl={process.env.PUBLIC_URL + activeProcess.image}
            leftArrowVisible={leftArrowVisible}
            rightArrowVisible={rightArrowVisible}
            handleClick={this.cycleProcesses.bind(this)} />
        </Col>
        <Col xs={2} xsOffset={1}>
          <DynamicMenu
            items={processes}
            activeId={activeProcess._id}
            title="PROCESS"
            isActive={true}
            handleClick={changeActiveProcess}/>
          <DynamicMenu
            items={[]}
            activeId={null}
            title="VR DEMO"
            isActive={false}
            linkTo={"/vision"}/>
        </Col>
      </Row>
    )
  }
}

export default Process
