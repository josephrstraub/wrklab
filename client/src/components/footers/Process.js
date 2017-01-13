import React from 'react'
import { Row, Col, ButtonGroup } from 'react-bootstrap'
import { changeActiveProcess, toggleModal, submitContactForm } from '../../actions'
import { connect } from 'react-redux'
import ProgressMeter from '../ProgressMeter'
import ModalButton from '../ModalButton'

const ProcessFooter = ({ processes, activeProcessId, changeActiveProcess }) => (
  <Row className="footer">
    <Col xs={6} xsOffset={3}>
      <ProgressMeter
        processes={processes}
        activeProcessId={activeProcessId}
        changeActiveProcess={changeActiveProcess}/>
    </Col>
    <Col xs={2} mdOffset={1} className="col-2">
      <ButtonGroup>
        <ModalButton />
      </ButtonGroup>
    </Col>
  </Row>
)

const mapStateToProps = (state) => ({
  processes: state.processes.data,
  activeProcessId: state.processes.activeProcessId
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveProcess: (index) => dispatch(changeActiveProcess(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProcessFooter)
