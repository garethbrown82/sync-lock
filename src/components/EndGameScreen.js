import React from 'react'
import styled from 'styled-components'
import { Text } from './Text'
import { Colour } from './helpers'

const StyledBorder = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid ${Colour.Green};
  border-radius: 10px;
`

export const EndGameScreen = () => {
  return (
    <StyledBorder>
      <Text
        fontSize={48}
        text={'Well done you\'ve complete all levels!'}
      />
    </StyledBorder>
  )
}
