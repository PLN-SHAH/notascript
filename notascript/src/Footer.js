import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation.js';

const StyledFooter = styled.footer`
	display: grid;
	align-items: center;
	background-color: lightgreen;
	color: white;
	font-family: 'Dancing Script', cursive;
	text-align: center;
	border-top: 5px solid white;
	background: linear-gradient(135deg, #562323, #4c4a58);
`;

export default function Footer() {
	return (
		<StyledFooter>
			<Navigation />
		</StyledFooter>
	);
}
