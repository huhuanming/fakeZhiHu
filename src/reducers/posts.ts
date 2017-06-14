import { handleActions } from 'redux-actions'

const postsReducer = handleActions({
  RECIVE_POSTS: (state, action) => action.payload,
}, [])

export default postsReducer
