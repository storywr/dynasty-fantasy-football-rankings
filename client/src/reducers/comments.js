export default function commentsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_COMMENTS_SUCCESS':
      return action.comments
    case 'ADD_COMMENT':
      const comment = Object.assign({}, action.comment, { id: state.length + 1} );
      return [ ...state, comment ];
    default:
      return state;
  }
}
