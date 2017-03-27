export const fetchMyFantasyLeaguePlayers = () => {
  return dispatch => {
    return fetch('http://www77.myfantasyleague.com/2017/export?TYPE=players&L=18474&W=&JSON=1')
      .then(response => response.json())
      .then(mflplayers => dispatch({ type: 'LOAD_MFL_PLAYERS_SUCCESS', mflplayers }))
      .catch(console.log)
  }
}
