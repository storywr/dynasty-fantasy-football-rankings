export default function mflplayersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_MFL_PLAYERS_SUCCESS':
      return action.mflplayers
    // case 'LOAD_MFL_ADP_SUCCESS':
    //   return action.adp
    default:
      return state;
  }
}
