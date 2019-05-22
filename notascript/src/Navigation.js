import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';

const StyledNavigation = styled.nav`
	> ul {
		margin: 0;
		padding: 0;
		font-size: 3em;
		list-style: none;
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
						<NavLink to='/test'>Home</NavLink>
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
