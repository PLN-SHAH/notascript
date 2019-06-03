import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	background: linear-gradient(135deg, #562323, #4c4a58);
	color: white;
	display: grid;
	align-items: center;
	font-family: 'Dancing Script', cursive;
	justify-content: center;
	box-shadow: 3px 3px 5px 6px #ccc;
`;

export default function Header() {
	return (
		<StyledHeader>
			<span>Notascript</span>
		</StyledHeader>
	);
}
