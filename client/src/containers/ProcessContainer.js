import { connect } from 'react-redux'
import { changeActiveProcess } from '../actions'
import _ from 'lodash'
import Process from '../components/Process'

const mapStateToProps = (state) => {
  let { data, activeProcessId } = state.processes
  let processIndex = _.findIndex(data, {_id: activeProcessId})
  return {
    processes: data,
    activeProcess: data.filter(process => process._id === activeProcessId).shift() || {},
    processIndex,
    leftArrowVisible: processIndex > 0,
    rightArrowVisible: data.length > 0 && processIndex + 1 < data.length
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeActiveProcess: (processId) => dispatch(changeActiveProcess(processId)),
  cycleProcesses: (increment) => {

  }
})

const ProcessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Process)

export default ProcessContainer
