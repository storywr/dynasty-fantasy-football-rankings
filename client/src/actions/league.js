export const fetchMyLeague = () => {
  return dispatch => {
    return fetch('/api/league')
      .then(response => response.json())
      .then(league => dispatch({ type: 'LOAD_LEAGUE_SUCCESS', league }))
      .catch(console.log)
  }
}
