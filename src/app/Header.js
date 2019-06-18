import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #373f43;
  color: white;
  display: grid;
  align-items: center;
  box-shadow: 3px 3px 5px 2px #ccc;
`

const StyledTitle = styled.h1`
  font-size: 1em;
  text-align: center;
`
const StyledNota = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
`

const StyledScript = styled.span`
  font-family: 'Dancing Script', cursive;
`

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>
        <StyledNota>Nota</StyledNota>
        <StyledScript>script</StyledScript>
      </StyledTitle>
    </StyledHeader>
  )
}
