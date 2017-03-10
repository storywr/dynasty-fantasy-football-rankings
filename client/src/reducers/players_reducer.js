export default function playersReducer(state = {
  players: [],
}, action) {
  switch(action.type) {

    case "ADD_PLAYER":
      return Object.assign({}, state, {
        players: [
          ...state.players,
          action.player
        ]
      });

    case "REMOVE_PLAYER":
      const removalIndex = state.players.findIndex(player => player.id === action.id);
      return Object.assign({}, state, {
        players: [
          ...state.players.slice(0, removalIndex),
          ...state.players.slice(removalIndex + 1)
        ]
      });

    default:
      return state;

  }
};
