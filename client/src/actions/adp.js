export const fetchMyFantasyLeagueADP = () => {
  return dispatch => {
    return fetch('/api/adp')
      .then(response => response.json())
      .then(adp => dispatch({ type: 'LOAD_MFL_ADP_SUCCESS', adp }))
      .catch(console.log)
  }
}
