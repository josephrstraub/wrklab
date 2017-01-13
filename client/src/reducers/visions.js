const initialState = {
  data: [],
  activeVisionId: ""
}

export const visions = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_VISIONS':
      return {
        data: action.visions,
        activeVisionId: action.visions[0]._id
      }
    case 'SET_ACTIVE_VISION':
      return {
        ...state,
        activeVisionId: action.visionId
      }
    default:
      return state
  }
}
