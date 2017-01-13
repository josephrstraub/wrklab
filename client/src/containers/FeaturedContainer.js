import { connect } from 'react-redux'
import { changeActiveFeaturedProjectImage, changeActiveFeaturedProject } from '../actions'
import _ from 'lodash'
import Featured from '../components/Featured'

const mapStateToProps = (state) => {
  let { data, activeProjectId, activeImageIndex } = state.featuredProjects
  let activeProject = data.filter(project => project._id === activeProjectId).shift()
  return {
    projects: data,
    activeProject: activeProject || {},
    projectIndex: _.findIndex(data, {_id: activeProjectId}),
    imageUrl: activeProject ? activeProject.images[activeImageIndex] : undefined,
    leftArrowVisible: activeImageIndex > 0,
    rightArrowVisible: data.length > 0 && activeImageIndex + 1 < activeProject.images.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: (increment) => dispatch(changeActiveFeaturedProjectImage(increment)),
    changeActiveFeaturedProject: (projectId) => dispatch(changeActiveFeaturedProject(projectId))
  }
}

const FeaturedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured)

export default FeaturedContainer
