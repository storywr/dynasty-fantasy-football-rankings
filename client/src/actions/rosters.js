export const fetchRosters = () => {
  return dispatch => {
    return fetch('/api/roster')
      .then(response => response.json())
      .then(rosters => dispatch({ type: 'LOAD_ROSTERS_SUCCESS', rosters }))
      .catch(console.log)
  }
}
