import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';

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
		grid-template-columns: repeat(2, 1fr);
	}
`;

export default class Navigation extends Component {
	render() {
		return (
			<StyledNavigation>
				<ul>
					<li>
						<StyledNavLink to='/work'>Work</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to='/overview'>Overview</StyledNavLink>
					</li>
				</ul>
			</StyledNavigation>
		);
	}
}
