const initialState = {
  data: [],
  activeProcessId: ""
}

export const processes = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PROCESSES':
      return {
        data: action.processes,
        activeProcessId: action.processes[0]._id
      }
    case 'SET_ACTIVE_PROCESS':
      return {
        ...state,
        activeProcessId: action.processId
      }
    default:
      return state
  }
}
