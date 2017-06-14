import { shallow } from 'enzyme'
import React from 'react'
import { StartImage } from './index'

describe('test RawStartImage', () => {
  it('render', () => {
    const wrapper = shallow(
      <StartImage
        startImage={{text: '', img: ''}}
      />,
    )
    expect(wrapper.type()).toBe(null)
  })
})
