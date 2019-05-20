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
      <h1>Bearbeiten</h1>
    </StyledHeader>
  );
}
