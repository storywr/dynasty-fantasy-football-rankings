export default function playersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_PLAYERS_SUCCESS':
      return action.players
    case 'UPDATE_RANKING':
      const updatedPlayers = state.map(player => {
        if(player.id === action.player.id){
          return { ...player, ...action.player }
        }
        return player
      })
      return updatedPlayers
    case 'ADD_PLAYER':
      const player = Object.assign({}, action.player, { id: state.length + 1} );
      return [ ...state, player ];
    default:
      return state;
  }
}
