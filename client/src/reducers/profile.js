export default function profileReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_PROFILE_SUCCESS':
      return action.profile
    default:
      return state;
  }
}
