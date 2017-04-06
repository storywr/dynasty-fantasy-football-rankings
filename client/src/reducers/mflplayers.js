export default function mflplayersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_MFL_PLAYERS_SUCCESS':
      return action.mflplayers
    default:
      return state;
  }
}
