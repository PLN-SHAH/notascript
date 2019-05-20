import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Dancing Script", cursive;
  background-color: lightgreen;
  color: white;
  justify-content: center;
  align-items: center;
  display: grid;
  text-align: center;
  background: linear-gradient(135deg, #562323, #4c4a58);
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>notascript</h1>
      <h2>Bearbeiten</h2>
    </StyledHeader>
  );
}
