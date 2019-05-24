import React, { Component } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink.js';

const StyledNavigation = styled.nav`
	font-size: 3em;
	display: grid;
	align-items: center;
	height: 100%;
	padding: 20px;
`;

const StyledNavLinkContainer = styled.button`
	background: linear-gradient(135deg, #562323, #4c4a58);
	padding: 20px;
	width: 100%;
	text-align: center;
	font-family: 'Raleway', sans-serif;
`;

export default class Home extends Component {
	render() {
		return (
			<StyledNavigation>
				<StyledNavLinkContainer>
					<NavLink to='/work'>Work</NavLink>
				</StyledNavLinkContainer>
				<StyledNavLinkContainer>
					<NavLink to='/settings'>Settings</NavLink>
				</StyledNavLinkContainer>
			</StyledNavigation>
		);
	}
}
