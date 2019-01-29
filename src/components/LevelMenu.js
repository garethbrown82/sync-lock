import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const StyledWrapper = styled.div`
  position: relative;
`

const HorizontalLine = styled.div`
  width: 35px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
`

const MenuContent = styled.div`
  border: solid 1px white;
  position: absolute;
  background-color: black;
  right: 0;
  padding: 0 20px;
  display: ${props => props.isVisible ? 'block' : 'none'}
`

export class LevelMenu extends React.Component {
  state = {
    isVisible: false
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }))
  }

  render() {
    const { levels } = this.props.levels
    return (
      <StyledWrapper>
        <div
          onClick={this.toggleMenu}
        >
          <HorizontalLine />
          <HorizontalLine />
          <HorizontalLine />
        </div>
        <MenuContent isVisible={this.state.isVisible}>
          {levels && levels.map((level, i) => <p key={i}>{`Level ${i+1}`}</p>)}
        </MenuContent>
      </StyledWrapper>
    )
  }
}

LevelMenu.propTypes = {
  levels: PropTypes.array,
}
