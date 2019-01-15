import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  border: solid 1px #00B760;
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`

export const Header = (props) => {
  const { text } = props
  return (
    <StyledHeader>
      <p>{text}</p>
    </StyledHeader>
  )
}
