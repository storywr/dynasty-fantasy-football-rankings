export const fetchMyFantasyLeagueADP = () => {
  return dispatch => {
    return fetch('http://www77.myfantasyleague.com/2017/export?TYPE=adp&L=18474&W=&JSON=1')
      .then(response => response.json())
      .then(adp => dispatch({ type: 'LOAD_MFL_ADP_SUCCESS', adp }))
      .catch(console.log)
  }
}
