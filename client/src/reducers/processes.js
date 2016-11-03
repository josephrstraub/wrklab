export const processes = (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case 'RECEIVE_PROCESSES':
      console.log("ayoooooo")
      return action.processes
    default:
      return state
  }
}

export const selectedProcess = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_PROCESS':
      return action.selected
    default:
      return state
  }
}
