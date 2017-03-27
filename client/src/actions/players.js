export const fetchPlayers = () => {
  return dispatch => {
    return fetch('/api/players')
      .then(response => response.json())
      .then(players => dispatch({ type: 'LOAD_PLAYERS_SUCCESS', players }))
      .catch(console.log)
  }
}

export function addPlayer(player) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ player })
  };

  return dispatch => {
    return fetch('/api/players', request)
      .then(response => response.json())
      .then(player => dispatch({ type: 'ADD_PLAYER', player }))
      .catch(console.log)
  }
}

export function updateRanking(player) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ player })
  };

  return dispatch => {
    return fetch('/api/players', request)
      .then(response => response.json())
      .then(player => dispatch({ type: 'UPDATE_RANKING', player }))
      .catch(console.log)
  }
}

// export function addPlayer(player){
//   return {
//     type: 'ADD_PLAYER',
//     player
//   };
// };
