export const fetchPlayers = () => {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: 'LOAD_PLAYERS_SUCCESS', players }))
      .catch(console.log)
  }
}

// export const fetchMyFantasyLeaguePlayers = () => {
//   return dispatch => {
//     return fetch('http://www77.myfantasyleague.com/2017/export?TYPE=players&L=18474&W=&JSON=1')
//       .then(response => response.json())
//       .then(mflplayers => dispatch({ type: 'LOAD_MFL_PLAYERS_SUCCESS', mflplayers }))
//       .catch(console.log)
//   }
// }
//
// export const fetchMyFantasyLeagueADP = () => {
//   return dispatch => {
//     return fetch('http://www77.myfantasyleague.com/2017/export?TYPE=adp&L=18474&W=&JSON=1')
//       .then(response => response.json())
//       .then(adp => dispatch({ type: 'LOAD_MFL_ADP_SUCCESS', adp }))
//       .catch(console.log)
//   }
// }

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
