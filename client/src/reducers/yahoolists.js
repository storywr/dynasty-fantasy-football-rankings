export default function yahoolistsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_YAHOO_SUCCESS':
      return action.yahoolists
    default:
      return state;
  }
}
