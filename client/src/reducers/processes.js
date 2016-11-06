export const processes = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PROCESSES':
      return action.processes
    default:
      return state
  }
}

export const activeProcess = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_PROCESS':
      return action.index
    default:
      return state
  }
}
