import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const StyledText = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`

export const Text = (props) => {
  return (
    <StyledText {...props}>
      {props.text}
    </StyledText>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
}
