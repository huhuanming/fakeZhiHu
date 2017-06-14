import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { IStore } from '../declarations'
import { fetchStartImages, recieveStartImage } from './startImage'

const fakeFetch: any = fetch

const stateImage = {text: '', img: ''}

describe('StartImage Action', () => {
  it('recieveStartImage', () => {
    expect(recieveStartImage(stateImage)).toMatchObject({
      payload: stateImage,
      type: 'RECIVE_START_IMAGE',
    })
  })

  it('fetchStartImages data flow', async () => {
    fakeFetch.mockResponse(JSON.stringify(stateImage))

    const mockStore = configureMockStore<IStore>([thunk])
    const store = mockStore()
    await store.dispatch(fetchStartImages())
    expect(store.getActions()).toMatchObject([
      recieveStartImage(stateImage),
    ])
  })
})
