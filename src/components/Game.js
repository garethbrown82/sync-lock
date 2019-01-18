import React, { Component } from 'react'
import { SquareButton } from './SquareButton'
import { Header } from './Header'
import { LevelButton } from './LevelButton'
import styled from 'styled-components'
import { levels, Button } from '../gameMechanics/levels'
import { triggerActions, isLevelSolved } from '../gameMechanics/gameHelpers'

const Grid = styled.div`
  height: 250px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 20px 0;
`

export class Game extends Component {
  state = {
    level: null,
    values: [],
    isLevelCompleted: false,
  }

  componentDidMount = () => {
    this.setInitialLevel(levels[0])
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { values, level } = this.state
    const isSolved = isLevelSolved(values, level.targetNumber)
    if (!prevState.isLevelCompleted && isSolved) {
      this.setState({ isLevelCompleted: isSolved })
    }
  }

  setInitialLevel = (level) => {
    this.setState({ level }, () => {
      this.setState({
        values: this.state.level.initialValues,
      })
    })
  }

  triggerButton = (clickedButton) => {
    const { level, values, isLevelCompleted } = this.state
    if (isLevelCompleted) return
    const updatedValues = triggerActions(clickedButton, level.buttonActions, values)
    this.setState({ values: updatedValues })
  }

  handleLevelButton = () => {
    console.log('level button clicked')
    if (this.state.isLevelCompleted) {
      console.log('go to next level')
    } else {
      this.setState((preState) => ({
        values: preState.level.initialValues
      }))
    }
  }

  render() {
    const { values, level, isLevelCompleted } = this.state
    const headerText = isLevelCompleted ?
      'You\'ve completed the level!'
      : `Target Value: ${level && level.targetNumber}`

    return (
      <React.Fragment>
        <Header
          text={headerText}
          levelNumber={3}
        />
        <Grid>
          <SquareButton
            column={1}
            row={1}
            value={values[0]}
            isLevelCompleted={isLevelCompleted}
            onClick={() => this.triggerButton(Button.TopLeft)}
          />
          <SquareButton
            column={2}
            row={1}
            value={values[1]}
            isLevelCompleted={isLevelCompleted}
            onClick={() => this.triggerButton(Button.TopRight)}
            />
          <SquareButton
            column={1}
            row={2}
            value={values[2]}
            isLevelCompleted={isLevelCompleted}
            onClick={() => this.triggerButton(Button.BottomLeft)}
            />
          <SquareButton
            column={2}
            row={2}
            value={values[3]}
            isLevelCompleted={isLevelCompleted}
            onClick={() => this.triggerButton(Button.BottomRight)}
            />
        </Grid>
        <LevelButton
          isLevelCompleted={isLevelCompleted}
          onClick={this.handleLevelButton}
        />
      </React.Fragment>
    )
  }
}