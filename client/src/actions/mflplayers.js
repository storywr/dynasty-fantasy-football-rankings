export const fetchMyFantasyLeaguePlayers = () => {
  return dispatch => {
    return fetch('/api/mflplayers')
      .then(response => response.json())
      .then(mflplayers => dispatch({ type: 'LOAD_MFL_PLAYERS_SUCCESS', mflplayers }))
      .catch(console.log)
  }
}
