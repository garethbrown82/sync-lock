import React, { Component } from 'react'
import { Game } from './components/Game'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`

const StyledWrapper = styled.div`
  max-width: 300px;
  margin: 20px auto;
  padding: 0 10px;
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <StyledWrapper>
          <Game />
        </StyledWrapper>
      </React.Fragment>
    )
  }
}

export default App;
