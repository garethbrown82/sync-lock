import React, { Component } from 'react'
import { SquareButton } from './SquareButton'
import { Header } from './Header'
import styled from 'styled-components'
import { levels, Button } from '../gameMechanics/levels'

const Grid = styled.div`
  height: 250px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

export class Game extends Component {
  state = {
    level: null,
    values: [],
  }

  componentDidMount = () => {
    this.setInitialLevel(levels[0])
  }

  setInitialLevel = (level) => {
    this.setState({ level }, () => {
      this.setState({
        values: this.state.level.startValues,
      })
    })
  }

  triggerButton = (clickedButton) => {
    const { level, values } = this.state
    const updatedValues = triggerActions(clickedButton, level.buttonActions, values)
  }

  render() {
    const { values, level } = this.state
    return (
      <React.Fragment>
        <Header
          text={`Target Value: ${level && level.targetNumber}`}
        />
        <Grid>
          <SquareButton column={1} row={1} value={values[0]} />
          <SquareButton column={2} row={1} value={values[1]} />
          <SquareButton column={1} row={2} value={values[2]} />
          <SquareButton column={2} row={2} value={values[3]} />
        </Grid>
      </React.Fragment>
    )
  }
}