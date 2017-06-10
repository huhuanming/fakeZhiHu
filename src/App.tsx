import React from 'react'
import { Provider } from 'react-redux'
import store from './middlewares'
import Router from './pages/Router'

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
