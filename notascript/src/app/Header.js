import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: #a6bee0;
	color: white;
	display: grid;
	font-family: 'Dancing Script', cursive;
	align-items: center;
	justify-content: center;
	box-shadow: 3px 3px 5px 6px #ccc;
`;

export default function Header() {
	return <StyledHeader>Notascript</StyledHeader>;
}
