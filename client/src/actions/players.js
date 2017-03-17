export const fetchPlayers = () => {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: 'LOAD_PLAYERS_SUCCESS', players }))
      .catch(console.log)
  }
}

export function addPlayer(player){
  return {
    type: 'ADD_PLAYER',
    player
  };
};
