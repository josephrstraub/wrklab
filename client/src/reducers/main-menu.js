export const showMainMenu = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_MAIN_MENU':
      return !state
    default:
      return state
  }
}
