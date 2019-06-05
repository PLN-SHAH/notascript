import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation.js';

const StyledFooter = styled.footer`
	background-color: #a6bee0;
	font-size: 2em;
`;

export default function Footer() {
	return (
		<StyledFooter>
			<Navigation />
		</StyledFooter>
	);
}
