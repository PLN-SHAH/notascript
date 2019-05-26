import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';

const StyledNavigation = styled.nav`
	> ul {
		font-size: 2.5em;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
`;

export default class Navigation extends Component {
	render() {
		return (
			<StyledNavigation>
				<ul>
					<li>
						<NavLink to='/home'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/work'>Work</NavLink>
					</li>
					<li>
						<NavLink to='/settings'>Settings</NavLink>
					</li>
				</ul>
			</StyledNavigation>
		);
	}
}
