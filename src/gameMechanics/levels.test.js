import { shallow, mount } from 'enzyme'
import React from 'react'
import { Game } from '../components/Game'
import { SquareButton } from '../components/SquareButton'
import { getLevels, Button } from '../gameMechanics/levels'

describe('Game component', () => {
  it('completes level one', (done) => {
    const gameWrapper = mount(<Game />)
    const buttons = gameWrapper.find(SquareButton)
    // const firstButton = buttons.first()
    console.log('state 1: ', gameWrapper.state())
    gameWrapper.instance().initialiseGame().then(() => {
      console.log('state 2: ', gameWrapper.state())
      done()
    })
  })
})