import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: lightgreen;
  padding: 20px;
  color: white;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>notascript</h1>
      <h2>Bearbeiten</h2>
    </StyledHeader>
  );
}
