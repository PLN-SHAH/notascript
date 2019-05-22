import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-self: end;
`;

const StyledButton = styled.button`
	color: $c-main;
	border: 0;
	border-bottom: 5px solid #4c4a58;
	height: 50px;
	margin-right: 5px;
	width: 50px;

	&:hover,
	&:active {
		border-bottom: 15px solid #4c4a58;
		font-size: 2.2em;
	}
`;

export default function Button(props) {
	return (
		<StyledButtonContainer>
			<div>{props.output}</div>
			{props.buttonLabels.map(label => (
				<StyledButton
					key={label}
					//onClick={label => props.handleButtonClick(label)}
					onClick={() => props.handleButtonClick(label)}
				>
					{label}
				</StyledButton>
			))}
		</StyledButtonContainer>
	);
}
