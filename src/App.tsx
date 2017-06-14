import React from 'react'
import { Provider } from 'react-redux'
import store from './middlewares'
import Index from './pages'

export class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

export default App
