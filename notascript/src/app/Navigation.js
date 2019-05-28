import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';

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
						<NavLink to='/work'>Work</NavLink>
					</li>
					<li>
						<NavLink to='/overview'>Overview</NavLink>
					</li>
				</ul>
			</StyledNavigation>
		);
	}
}
