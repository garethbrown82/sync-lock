import React, { Component } from 'react'
import { SquareButton } from './SquareButton'
import { Header } from './Header'
import { LevelButton } from './LevelButton'
import { EndGameScreen } from './EndGameScreen'
import styled from 'styled-components'
import { getLevels, Button } from '../gameMechanics/levels'
import { triggerActions, isLevelSolved } from '../gameMechanics/gameHelpers'
import { Colour } from './helpers';
import { saveLevelToIndexedDb, getSavedLevel } from '../repository/indexeddb'

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
    allLevels: [],
  }

  componentDidMount = async () => {
    const savedLevel = await getSavedLevel()
    const levelIndex = savedLevel || this.state.levelIndex
    this.setState({ allLevels: getLevels() }, () => {
      this.resetLevel(levelIndex)
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { values, level } = this.state
    if (!level) return
    const isCompleted = isLevelSolved(values, level.targetNumber)
    if (!prevState.isLevelCompleted && isCompleted) {
      this.setState({ isLevelCompleted: isCompleted })
    }
  }

  resetLevel = (index) => {
    const level = this.state.allLevels[index]
    this.setState({ level }, () => {
      this.setState({
        values: this.state.level.initialValues,
        isLevelCompleted: false,
        isAllLevelsCompleted: false,
        levelIndex: index,
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
      this.setNextLevel()
    } else {
      this.setState((preState) => ({
        values: preState.level.initialValues
      }))
    }
  }

  setNextLevel = () => {
    if (this.state.levelIndex+1 === this.state.allLevels.length) {
      this.setState({ isAllLevelsCompleted: true })
    } else {
      this.setState((prevState) => ({
        levelIndex: prevState.levelIndex + 1
      }), () => {
        this.resetLevel(this.state.levelIndex)
        saveLevelToIndexedDb(this.state.levelIndex)
      })
    }
  }

  resetToBeginning = () => {
    this.resetLevel(0)
  }

  render() {
    const { values, level, isLevelCompleted, levelIndex, isAllLevelsCompleted } = this.state
    const headerText = isLevelCompleted ?
      `You've completed level ${levelIndex+1}!`
      : `Target Value: ${level && level.targetNumber}`
      
    return (
      isAllLevelsCompleted ? 
      <EndGameScreen
        resetToBeginning={this.resetToBeginning}
      /> :
      (<React.Fragment>
        <Header
          text={headerText}
          levelNumber={levelIndex+1}
          levels={this.state.allLevels}
          setLevel={this.resetLevel}
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
          text={isLevelCompleted ? 'Next Level' : 'Reset'}
          colour={isLevelCompleted ? Colour.Blue : Colour.Red}
          onClick={this.handleLevelButton}
        />
      </React.Fragment>)
    )
  }
}