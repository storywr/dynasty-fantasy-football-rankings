export const fetchYPlayers = () => {
  return dispatch => {
    return fetch('/api/yplayers')
      .then(response => response.json())
      .then(yplayers => dispatch({ type: 'LOAD_YPLAYERS_SUCCESS', yplayers }))
      .catch(console.log)
  }
}
