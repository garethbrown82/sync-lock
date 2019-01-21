import React, { Component } from 'react'
import { SquareButton } from './SquareButton'
import { Header } from './Header'
import { LevelButton } from './LevelButton'
import { EndGameScreen } from './EndGameScreen'
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
    levelIndex: 0,
    level: null,
    values: [],
    isLevelCompleted: false,
    isAllLevelsCompleted: false,
  }

  componentDidMount = () => {
    const { levelIndex } = this.state
    this.resetLevel(levels[levelIndex])
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { values, level } = this.state
    const isCompleted = isLevelSolved(values, level.targetNumber)
    if (!prevState.isLevelCompleted && isCompleted) {
      this.setState({ isLevelCompleted: isCompleted })
    }
  }

  resetLevel = (level) => {
    this.setState({ level }, () => {
      this.setState({
        values: this.state.level.initialValues,
        isLevelCompleted: false,
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
    if (this.state.isLevelCompleted) {
      if (this.state.levelIndex+1 === levels.length) {
        this.setState({ isAllLevelsCompleted: true })
      } else {
        this.setState((prevState) => ({
          levelIndex: prevState.levelIndex + 1
        }), () => this.resetLevel(levels[this.state.levelIndex]))
      }
    } else {
      this.setState((preState) => ({
        values: preState.level.initialValues
      }))
    }
  }

  render() {
    const { values, level, isLevelCompleted, levelIndex, isAllLevelsCompleted } = this.state
    const headerText = isLevelCompleted ?
      'You\'ve completed the level!'
      : `Target Value: ${level && level.targetNumber}`

    return (
      isAllLevelsCompleted ? 
      <EndGameScreen /> :
      (<React.Fragment>
        <Header
          text={headerText}
          levelNumber={levelIndex+1}
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
      </React.Fragment>)
    )
  }
}