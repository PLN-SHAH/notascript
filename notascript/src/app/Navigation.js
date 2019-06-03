import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';
import ReactSVG from 'react-svg';

const StyledNavLink = styled(NavLink)`
	color: white;
	text-decoration: none;
	font-size: 1em;

	&:hover {
		padding-bottom: 5px;
		text-decoration: underline;
	}
`;

const StyledNavigation = styled.nav`
	> ul {
		font-size: 2.5em;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		align-items: center;
		margin: 5px;
	}
`;

export default class Navigation extends Component {
	render() {
		return (
			<StyledNavigation>
				<ul>
					<li>
						<StyledNavLink to='/create'>
							<ReactSVG src='icon-add.svg' />
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to='/documents'>
							<ReactSVG src='icon-overview.svg' />
						</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to='/overview'>
							<ReactSVG src='icon-documents.svg' />
						</StyledNavLink>
					</li>
				</ul>
			</StyledNavigation>
		);
	}
}
