import React from "react";
import styled from "styled-components";

const StyledButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: end;
`;

const StyledButton = styled.button`
  color: white;
  border: 0;
  margin-right: 5px;
  border-bottom: 5px solid #4c4a58;
  height: 50px;
  width: 50px;

  &:hover,
  &:active {
    border-bottom: 15px solid #4c4a58;
    font-size: 2.2em;
  }
`;

export default function Button({ buttonLabels, handleButtonClick }) {
  console.log("Button");
  return (
    <StyledButtonContainer>
      {buttonLabels.map(label => (
        <StyledButton key={label} onClick={() => handleButtonClick(label)}>
          {label}
        </StyledButton>
      ))}
    </StyledButtonContainer>
  );
}
