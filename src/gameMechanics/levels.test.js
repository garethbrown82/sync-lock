import { shallow } from 'enzyme'
import React from 'react'
import { Game } from '../components/Game'
import { Button } from './levels'

describe('Game component', () => {
  it('sets the initial state', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    expect(gameWrapper.state().level).not.toBe(null)
  })

  it('completes level one with the correct button sequence', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    instance.resetLevel(0)
    expect(gameWrapper.state().levelIndex).toBe(0)

    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomRight)
    instance.triggerButton(Button.BottomRight)

    expect(gameWrapper.state().isLevelCompleted).toBe(true)
  })
})