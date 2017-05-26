export const fetchYahoolists = () => {
  return dispatch => {
    return fetch('/api/yahoolists')
      .then(response => response.json())
      .then(yahoolists => dispatch({ type: 'LOAD_YAHOO_SUCCESS', yahoolists }))
      .catch(console.log)
  }
}
