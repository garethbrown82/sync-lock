import React from 'react'
import styled from 'styled-components'
import { Colour } from './helpers'
import { PropTypes } from 'prop-types'

const StyledLevelButton = styled.div.attrs(props => ({
  onClick: props.onClick
}))`
  background-color: ${props => props.isLevelCompleted ? Colour.Blue : Colour.Red};
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: white;
`

export const LevelButton = (props) => {
  const label = props.isLevelCompleted ? 'Next level' : 'Reset'
  return (
    <StyledLevelButton {...props}>
      <p>{label}</p>
    </StyledLevelButton>
  )
}

LevelButton.propTypes = {
  isLevelCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
