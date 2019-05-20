import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: lightgreen;
  padding: 20px;
  font-size: 2em;
  color: white;
  border: 0;
  margin-right: 5px;
`;

export default function Buttons() {
  function handleClick(event) {
    const target = event.target.innerHTML;
    document.body.insertAdjacentText("afterbegin", target);
    return target;
  }

  return (
    <section>
      <StyledButton onClick={handleClick}>&#1049;</StyledButton>
      <StyledButton onClick={handleClick}>&#859;</StyledButton>
      <StyledButton onClick={handleClick}>&#1029;</StyledButton>
      <StyledButton onClick={handleClick}>&#995;</StyledButton>
    </section>
  );
}
