export default function leagueReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_LEAGUE_SUCCESS':
      return action.league
    default:
      return state;
  }
}
