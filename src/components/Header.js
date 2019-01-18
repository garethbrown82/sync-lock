import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const StyledHeader = styled.div`
  border: solid 1px #00B760;
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`

export const Header = (props) => {
  const { text, levelNumber } = props
  return (
    <StyledHeader>
      <p>{`Level: ${levelNumber}`}</p>
      <p>{text}</p>
    </StyledHeader>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  levelNumber: PropTypes.number.isRequired,
}
