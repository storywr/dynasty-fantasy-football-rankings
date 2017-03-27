export default function adpReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_MFL_ADP_SUCCESS':
      return action.adp
    default:
      return state;
  }
}
