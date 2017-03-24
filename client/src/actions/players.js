export const fetchPlayers = () => {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: 'LOAD_PLAYERS_SUCCESS', players }))
      .catch(console.log)
  }
}

// export const fetchMyFantasyLeaguePlayers = () => {
//   const request = new Request('http://www77.myfantasyleague.com/2017/export?TYPE=players&L=18474&W=&JSON=1', {
//     mode: 'no-cors'
//   });
//
//   return dispatch => {
//     return fetch(request)
//       .then(response => response.json())
//       .then(mflplayers => dispatch({ type: 'LOAD_MFL_PLAYERS_SUCCESS', mflplayers }))
//       .catch(console.log)
//   }
// }
//
// export const fetchMyFantasyLeagueADP = () => {
//   const request = new Request('http://www77.myfantasyleague.com/2017/export?TYPE=adp&L=18474&W=&JSON=1', {
//     mode: 'no-cors'
//   });
//
//   return dispatch => {
//     return fetch(request)
//       .then(response => response.json())
//       .then(adp => dispatch({ type: 'LOAD_MFL_ADP_SUCCESS', adp }))
//       .catch(console.log)
//   }
// }

export function addPlayer(player) {
  const request = new Request('/api/players', {
    method: 'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({player: player})
  });

  return dispatch => {
    return fetch(request)
      .then(response => response.json())
      .then(player => dispatch({ type: 'ADD_PLAYER', player }))
      .catch(console.log)
  }
}

// export function addPlayer(player){
//   return {
//     type: 'ADD_PLAYER',
//     player
//   };
// };
