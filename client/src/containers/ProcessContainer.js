import { connect } from 'react-redux'
import { changeActiveProcess } from '../actions'
import Process from '../components/Process'

const mapStateToProps = (state) => {
  return {
    processes: state.processes,
    activeProcess: state.activeProcess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveProcess: (index) => {
      dispatch(changeActiveProcess(index))
    }
  }
}

const ProcessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Process)

export default ProcessContainer
