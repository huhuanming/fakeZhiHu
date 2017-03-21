import * as React from 'react'
import { Provider } from 'react-redux'
import StartImage from './StartImage'
import store from './middlewares'

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <StartImage />
      </Provider>
    )
  }
}

export default App
