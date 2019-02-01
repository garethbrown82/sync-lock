import { shallow, mount } from 'enzyme'
import React from 'react'
import { Game } from '../components/Game'

describe('Game component', () => {
  it('completes level one', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    expect(gameWrapper.state().level).not.toBe(null)
  })
})