import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const StyledWrapper = styled.div`
  position: relative;
`

const MenuWrap = styled.div`
  cursor: pointer;
`

const HorizontalLine = styled.div`
  width: 35px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
`

const MenuContent = styled.div`
  border: solid 1px white;
  width: max-content;
  position: absolute;
  background-color: black;
  right: 0;
  padding: 0 20px;
  display: ${props => props.isVisible ? 'block' : 'none'}
`

const MenuItem = styled.p.attrs(props => ({
  onClick: props.onClick
}))`
  cursor: pointer;
  user-select: none;
  color: #EFE9F4;
  &:hover {
    color: white;
  }
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

  handleLevelClick = (index) => {
    this.props.setLevel(index)
    this.setState({ isVisible: false })
  }

  render() {
    const { levels } = this.props
    return (
      <StyledWrapper>
        <MenuWrap
          onClick={this.toggleMenu}
        >
          <HorizontalLine />
          <HorizontalLine />
          <HorizontalLine />
        </MenuWrap>
        <MenuContent isVisible={this.state.isVisible}>
          {levels && levels.map((level, i) => (
            <MenuItem
              key={i}
              onClick={() => this.handleLevelClick(i)}
            >
              {`Level ${i+1}`}
            </MenuItem>
          ))}
        </MenuContent>
      </StyledWrapper>
    )
  }
}

LevelMenu.propTypes = {
  levels: PropTypes.array,
  setLevel: PropTypes.func,
}
