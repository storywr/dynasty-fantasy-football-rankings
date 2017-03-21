export const fetchComments = () => {
  return dispatch => {
    return fetch('/api/comments')
      .then(response => response.json())
      .then(comments => dispatch({ type: 'LOAD_COMMENTS_SUCCESS', comments }))
      .catch(console.log)
  }
}

export function addPlayer(comment){
  return {
    type: 'ADD_COMMENT',
    comment
  };
};
