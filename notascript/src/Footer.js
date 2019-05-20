import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: lightgreen;
  padding: 20px;
  color: white;
  font-family: "Dancing Script", cursive;
  text-align: center;
  background: linear-gradient(135deg, #562323, #4c4a58);
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>author: pauline version 0.0.1</p>
    </StyledFooter>
  );
}
