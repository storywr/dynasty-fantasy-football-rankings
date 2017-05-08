export function fetchScore(score) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ score })
  };

  return dispatch => {
    return fetch('/api/scores', request)
      .then(response => (response.json()))
      .then(score => dispatch({ type: 'LOAD_SCORE_SUCCESS', score }))
      .catch(console.log)
  }
}
