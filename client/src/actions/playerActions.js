import fetch from 'isomorphic-fetch';

export function fetchPlayers() {

  return function(dispatch){
    dispatch({type: 'LOADING_PLAYERS'})
    return fetch('http://localhost:3001/players')
      .then(response => response.json())
      .then(json => dispatch({type: 'ADD_PLAYER', payload: json}))
    }
}
