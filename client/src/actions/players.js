export const fetchPlayers = () => {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: 'LOAD_PLAYERS_SUCCESS', players }))
      .catch(console.log)
  }
}

// static createPlayer(player) {
//   const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
//   const request = new Request(`${process.env.API_HOST}/api/players`, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify({player: player})
//   });

export function addPlayer(player){
  return {
    type: 'ADD_PLAYER',
    player
  };
};
