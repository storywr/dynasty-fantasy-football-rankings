export default function rostersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_ROSTERS_SUCCESS':
      return action.rosters
    default:
      return state;
  }
}
