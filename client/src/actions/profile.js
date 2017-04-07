export const fetchProfile = (PlayerID) => {
  return dispatch => {
    return fetch(`http://www03.myfantasyleague.com/2017/export?TYPE=playerProfile&P=${PlayerID}&JSON=1`)
      .then(response => response.json())
      .then(profile => dispatch({ type: 'LOAD_PROFILE_SUCCESS', profile }))
      .catch(console.log)
  }
}
