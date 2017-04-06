export const fetchMyLeague = (LeagueID) => {
  return dispatch => {
    return fetch(`http://www77.myfantasyleague.com/2017/export?TYPE=league&L=${LeagueID}&W=&JSON=1`)
      .then(response => response.json())
      .then(league => dispatch({ type: 'LOAD_LEAGUE_SUCCESS', league }))
      .catch(console.log)
  }
}
