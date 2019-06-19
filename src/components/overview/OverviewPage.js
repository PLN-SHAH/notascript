import NavLink from '../../app/NavLink.js'
import React from 'react'
import styled from 'styled-components'
import { NavIcon } from '../../misc/Style.js'

const StyledNavLink = styled(NavLink)`
  color: white;
  background-color: #7cd365;
  font-family: 'Raleway';
  padding: 20px;
  font-size: 2em;
  text-align: left;
  box-shadow: 3px 3px 3px 2px #ccc;

  > i {
    color: white;
    padding-right: 20px;
  }

  &:nth-child(2) {
    background-color: #29c1ee;
  }
`

const StyledNavContainer = styled.section`
  height: 100%;
`

const StyledNav = styled.nav`
  display: grid;
  padding: 20px;
  align-items: center;
  height: 100%;
`

const StyledNavIcon = styled(NavIcon)``

export default function OverviewPage() {
  return (
    <>
      <StyledNavContainer>
        <StyledNav>
          <StyledNavLink to="/documents">
            <i className="fas fa-copy" />
            Documents
          </StyledNavLink>
          <StyledNavLink to="/dictionaries">
            <i className="fas fa-book" />
            Dictionaries
          </StyledNavLink>
        </StyledNav>
      </StyledNavContainer>
    </>
  )
}
