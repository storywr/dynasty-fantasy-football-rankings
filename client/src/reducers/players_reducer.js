export default function playersReducer(state= {loading: false, pictures: []}, action) {
  switch ( action.type ) {
    case 'LOADING_PLAYERS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_PLAYERS':
      return {loading: false, pictures: action.payload}
    default:
      return state;
  }

}
