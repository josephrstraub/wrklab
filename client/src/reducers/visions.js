export const visions = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_VISIONS':
      return action.visions
    default:
      return state
  }
}

export const activeVision = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_VISION':
      return action.index
    default:
      return state
  }
}
