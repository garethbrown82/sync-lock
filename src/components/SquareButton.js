import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const Colours = Object.freeze({
  Green: '#00B760',
  Blue: '#0197F6',
})

const StyledSquare = styled.div`
  background-color: ${props => props.isLevelCompleted ? Colours.Green : Colours.Blue};
  grid-column: ${props => `${props.column} / ${props.column}`};
  grid-row: ${props => `${props.row} / ${props.row}`}
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const Number = styled.p`
  color: white;
  font-size: 32px;
`

export const SquareButton = (props) => {
  const { value } = props
  return (
    <StyledSquare {...props}>
      <Number>
        {value}
      </Number>
    </StyledSquare>
  )
}

SquareButton.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number),
  isLevelCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}


// column={2}
// row={1}
// value={values[1]}
// isLevelCompleted={isLevelCompleted}
// onClick={() => this.triggerButton(Button.TopRight)}