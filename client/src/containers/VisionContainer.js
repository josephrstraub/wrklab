import { connect } from 'react-redux'
import { changeActiveVision } from '../actions'
import Vision from '../components/Vision'

const mapStateToProps = (state) => {
  return {
    visions: state.visions,
    activeVision: state.activeVision
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveVision: (index) => {
      dispatch(changeActiveVision(index))
    }
  }
}

const VisionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vision)

export default VisionContainer
