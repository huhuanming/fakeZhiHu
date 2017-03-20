import { shallow } from 'enzyme'
import * as React from 'react'
import * as renderer from 'react-test-renderer'
import App from './App'


it('renders without crashing', () => {
  // const enzymeWrapper = shallow(<App />)
  // enzymeWrapper.render()
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
