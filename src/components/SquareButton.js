import React from 'react'
import styled from 'styled-components'

const StyledSquare = styled.div`
  background-color: #0197F6;
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
  const { number } = props
  return (
    <StyledSquare {...props}>
      <Number>
        {number}
      </Number>
    </StyledSquare>
  )
}
