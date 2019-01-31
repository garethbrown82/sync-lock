import React from 'react'
import { shallow } from 'enzyme'
import { Text } from './Text'

describe('Text component', () => {
  it('should render text', () => {
    const textComponent = shallow(<Text className='myclass' text='Hello' fontSize={20} />)
    expect(textComponent.exists('.myclass')).toBe(true)
    expect(textComponent.html()).toContain('Hello')
    expect(textComponent.html()).toContain('font-size="20"')
  })
})
