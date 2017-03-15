export default function playersReducer(state= {loading: false, players: []}, action) {
  switch ( action.type ) {
    case 'LOADING_PLAYERS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_PLAYERS':
      return {loading: false, players: action.players}
    default:
      return state;
  }
}
