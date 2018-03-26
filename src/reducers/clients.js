export default (state = {
  clients: ['manuel', 'miguel', 'kevin']
}, action) => {
  switch (action.type) {
    case 'GET_CLIENTS':

      return {
        ...state
      }
      break;
    default:
      return state
  }
}
