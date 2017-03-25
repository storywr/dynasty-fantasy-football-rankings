export const fetchComments = () => {
  return dispatch => {
    return fetch('/api/comments')
      .then(response => response.json())
      .then(comments => dispatch({ type: 'LOAD_COMMENTS_SUCCESS', comments }))
      .catch(console.log)
  }
}

export function addComment(comment) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment })
  };

  return dispatch => {
    return fetch('/api/comments', request)
      .then(response => response.json())
      .then(comment => dispatch({ type: 'ADD_COMMENT', comment }))
      .catch(console.log)
  }
}

// export function addComment(comment){
//   return {
//     type: 'ADD_COMMENT',
//     comment
//   };
// };
