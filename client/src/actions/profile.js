export function fetchProfile(profile) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profile })
  };

  return dispatch => {
    return fetch('/api/profiles', request)
      .then(response => (response.json()))
      .then(profile => dispatch({ type: 'LOAD_PROFILE_SUCCESS', profile }))
      .catch(console.log)
  }
}
