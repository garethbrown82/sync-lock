import React, { Component } from 'react'
import { SquareButton } from './SquareButton'
import { Header } from './Header'
import styled from 'styled-components'

const Grid = styled.div`
  height: 250px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

export class Game extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          text='Header text here...'
        />
        <Grid>
          <SquareButton column={1} row={1} number={10} />
          <SquareButton column={2} row={1} number={15}  />

          <SquareButton column={1} row={2} number={25}  />
          <SquareButton column={2} row={2} number={5}  />
        </Grid>
      </React.Fragment>
    )
  }
}