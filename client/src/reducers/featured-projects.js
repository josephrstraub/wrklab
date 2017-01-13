const initialState = {
  data: [],
  activeProjectId: "",
  activeImageIndex: 0
}

export const featuredProjects = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_FEATURED_PROJECTS':
      return {
        ...state,
        data: action.featuredProjects,
        activeProjectId: action.featuredProjects[0]._id
      }
    case 'SET_ACTIVE_FEATURED_PROJECT':
      return {
        ...state,
        activeProjectId: action.projectId,
        activeImageIndex: 0
      }
    case 'SET_ACTIVE_FEATURED_PROJECT_IMAGE':
      return {
        ...state,
        activeImageIndex: state.activeImageIndex + action.increment
      }
    default:
      return state
  }
}
