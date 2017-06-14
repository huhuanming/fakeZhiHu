import { Dispatch } from 'react-redux'
import { returntypeof } from 'react-redux-typescript'
import { createAction } from 'redux-actions'
import { IPost, IStore } from '../declarations'

const recievePosts = createAction('RECIVE_POSTS', (response: IPost[]) => response)
const recievePostsType = returntypeof(recievePosts)
export type IRecieveStartImageAction = typeof recievePostsType

export const fetchPosts = () => (dispatch: Dispatch<IStore>) =>
  fetch('http://localhost:8111/posts').then(
    (response) => response.json().then(
      (json) => {
        dispatch(recievePosts(json))
      }),
    )

export type IFetchPosts = typeof fetchPosts
