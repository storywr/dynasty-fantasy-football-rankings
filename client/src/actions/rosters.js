export const fetchRosters = () => {
  return dispatch => {
    return fetch('http://www77.myfantasyleague.com/2017/export?TYPE=rosters&L=18474&W=&JSON=1')
      .then(response => response.json())
      .then(rosters => dispatch({ type: 'LOAD_ROSTERS_SUCCESS', rosters }))
      .catch(console.log)
  }
}
