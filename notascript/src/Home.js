import React, { Component } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink.js';

const StyledNavigation = styled.nav`
	font-size: 3em;
	display: grid;
	justify-content: center;
	align-items: center;
	height: 100%;
	grid-template-rows: repeat(3, 33%);
`;

const StyledNavLinkContainer = styled.a`
	background: linear-gradient(135deg, #562323, #4c4a58);
	padding: 20px;
	width: 500px;
	text-align: center;
	margin-bottom: 30px;
`;

export default class Home extends Component {
	render() {
		return (
			<StyledNavigation>
				<StyledNavLinkContainer>
					<NavLink to='/home'>Home</NavLink>
				</StyledNavLinkContainer>
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
