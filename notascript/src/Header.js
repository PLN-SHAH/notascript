import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	align-items: center;
	background: linear-gradient(135deg, #562323, #4c4a58);
	color: white;
	display: grid;
	font-family: 'Dancing Script', cursive;
	justify-content: center;
	text-align: center;
`;

export default function Header() {
	return (
		<StyledHeader>
			<h1>Notascript</h1>
			<h2>Bearbeiten</h2>
		</StyledHeader>
	);
}