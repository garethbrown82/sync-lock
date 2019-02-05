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

  it('completes level two with the correct button sequence', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    instance.resetLevel(1)
    expect(gameWrapper.state().levelIndex).toBe(1)

    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomRight)
    instance.triggerButton(Button.BottomRight)

    expect(gameWrapper.state().isLevelCompleted).toBe(true)
  })

  it('completes level three with the correct button sequence', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    instance.resetLevel(2)
    expect(gameWrapper.state().levelIndex).toBe(2)

    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.BottomRight)
    instance.triggerButton(Button.BottomRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomLeft)

    expect(gameWrapper.state().isLevelCompleted).toBe(true)
  })

  it('completes level four with the correct button sequence', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    instance.resetLevel(3)
    expect(gameWrapper.state().levelIndex).toBe(3)

    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.BottomRight)
    instance.triggerButton(Button.BottomLeft)

    expect(gameWrapper.state().isLevelCompleted).toBe(true)
  })

  it('completes level five with the correct button sequence', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    instance.resetLevel(4)
    expect(gameWrapper.state().levelIndex).toBe(4)

    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomRight)

    expect(gameWrapper.state().isLevelCompleted).toBe(true)
  })

  it('completes level six with the correct button sequence', async () => {
    const gameWrapper = shallow(<Game />)
    const instance = gameWrapper.instance()
    await instance.initialiseGame()
    instance.resetLevel(5)
    expect(gameWrapper.state().levelIndex).toBe(5)

    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopLeft)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.TopRight)
    instance.triggerButton(Button.BottomRight)
    instance.triggerButton(Button.BottomLeft)
    instance.triggerButton(Button.BottomLeft)

    expect(gameWrapper.state().isLevelCompleted).toBe(true)
  })
})