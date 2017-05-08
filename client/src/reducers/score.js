export default function scoreReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_SCORE_SUCCESS':
      return action.score
    default:
      return state;
  }
}
