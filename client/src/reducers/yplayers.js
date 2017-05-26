export default function yplayersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_YPLAYERS_SUCCESS':
      return action.yplayers
    default:
      return state;
  }
}
