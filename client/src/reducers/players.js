export default function playersReducer(state = [], action) {
  switch ( action.type ) {
    // case 'LOADING_PLAYERS':
    //   return Object.assign({}, state, {loading: true})
    case 'LOAD_PLAYERS_SUCCESS':
      return action.players
    default:
      return state;
  }
}
