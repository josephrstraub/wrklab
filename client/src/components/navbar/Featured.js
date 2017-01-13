import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { changeActiveFeaturedProject } from '../../actions'
import { ButtonGroup, Button } from 'react-bootstrap'

const getStyles = (isActive) => ({
  backgroundColor: isActive ? "inherit" : "#27697B",
  color: isActive ? "#FF1FA9" : "white"
})

const FeaturedProjectsNavBar = ({ projects, activeProjectId, changeActiveFeaturedProject }) => (
  <ButtonGroup justified>
    {
      projects.map(project => (
        <ButtonGroup key={project._id}>
          <Button
            className={`nav-btn ${project._id !== activeProjectId ? "hoverable" : "active-nav-btn"}`}
            onClick={changeActiveFeaturedProject.bind(null, project._id)}
            style={getStyles(project._id === activeProjectId)}
          >
            {project.name}
          </Button>
        </ButtonGroup>
      ))
    }
  </ButtonGroup>
)

const mapStateToProps = (state) => ({
  projects: state.featuredProjects.data,
  activeProjectId: state.featuredProjects.activeProjectId
})

const mapDispatchToProps = (dispatch) => ({
  changeActiveFeaturedProject: (projectId) => dispatch(changeActiveFeaturedProject(projectId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedProjectsNavBar)
