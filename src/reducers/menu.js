export default (state = {
  active: 'home',
}, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_ITEM':
      return {
        ...state,
        active: action.payload
      }
      break;
    default:
      return state
  }
}
