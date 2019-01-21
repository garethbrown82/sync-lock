import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import { Colour } from './helpers'
import { LevelButton } from './LevelButton'
import { PropTypes } from 'prop-types'

const StyledBorder = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid ${Colour.Green};
  border-radius: 10px;
  margin-bottom: 20px;
`

export const EndGameScreen = (props) => {
  return (
    <React.Fragment>
      <StyledBorder>
        <Text
          fontSize={48}
          text={'Well done you\'ve complete all levels!'}
        />
      </StyledBorder>
      <LevelButton
        text='Reset to level 1'
        colour={Colour.Red}
        onClick={props.resetToBeginning}
      />
    </React.Fragment>
  )
}

EndGameScreen.propTypes = {
  resetToBeginning: PropTypes.func.isRequired,
}
