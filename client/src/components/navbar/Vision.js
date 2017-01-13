import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeActiveVision } from '../../actions'
import { ButtonGroup, Button } from 'react-bootstrap'

const getStyles = (isActive) => ({
  backgroundColor: isActive ? "inherit" : "#744478",
  color: isActive ? "#FF1FA9" : "white"
})

const VisionNavBar = ({ visions, activeVisionId, changeActiveVision }) => (
  <ButtonGroup justified>
    {
      visions.map(vision => (
        <ButtonGroup key={vision._id}>
          <Button
            className={`nav-btn ${vision._id !== activeVisionId ? "hoverable" : "active-nav-btn"}`}
            onClick={changeActiveVision.bind(null, vision._id)}
            style={getStyles(vision._id === activeVisionId)}
          >
            {vision.name}
          </Button>
        </ButtonGroup>
      ))
    }
  </ButtonGroup>
)

const mapStateToProps = (state) => ({
  visions: state.visions.data,
  activeVisionId: state.visions.activeVisionId
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveVision: (visionId) => dispatch(changeActiveVision(visionId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisionNavBar)
