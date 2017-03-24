export default function playersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_PLAYERS_SUCCESS':
      return action.players
    // case 'LOAD_MFL_PLAYERS_SUCCESS':
    //   return action.mflplayers
    // case 'LOAD_MFL_ADP_SUCCESS':
    //   return action.adp
    case 'ADD_PLAYER':
      const player = Object.assign({}, action.player, { id: state.length + 1} );
      return [ ...state, player ];
    default:
      return state;
  }
}
