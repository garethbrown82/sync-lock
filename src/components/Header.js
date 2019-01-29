import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { LevelMenu } from './LevelMenu'

const StyledHeader = styled.div`
  border: solid 1px #00B760;
  color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = (props) => {
  const { text, levelNumber, levels } = props
  return (
    <React.Fragment>
      <StyledHeader>
        <div>
          <p>{`Level: ${levelNumber}`}</p>
          <p>{text}</p>
        </div>
        <LevelMenu levels={levels} />
      </StyledHeader>
    </React.Fragment>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  levelNumber: PropTypes.number.isRequired,
}
