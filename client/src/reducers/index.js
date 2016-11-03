const initialState = {
  mainMenu: ["Contact", "Vision", "Works"],
  processes: [],
  visions: [],
  products: [],
  featuredProjects: [],
  activeListIndex: 0,
  activeSubIndex: 0,
  showModal: false
}

const wrklabApp = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        ...state,
        [action.dataType]: action.data
      }
    case 'CHANGE_ACTIVE_LIST':
      return {
        ...state,
        activeList: state[action.newList],
        activeListIndex: 0
      }
    case 'CHANGE_ACTIVE_LIST_INDEX':
      return {
        ...state,
        activeListIndex: action.newIndex
      }
    case 'CHANGE_ACTIVE_SUB_INDEX':
      return {
        ...state,
        activeSubIndex: action.newIndex
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: !state.showModal
      }
    default:
      return state
  }
}

export default wrklabApp
