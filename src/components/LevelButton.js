import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const StyledLevelButton = styled.div.attrs(props => ({
  onClick: props.onClick
}))`
  background-color: ${props => props.colour};
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
`

export const LevelButton = (props) => {
  return (
    <StyledLevelButton {...props}>
      <p>{props.text}</p>
    </StyledLevelButton>
  )
}

LevelButton.propTypes = {
  text: PropTypes.string,
  colour: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
