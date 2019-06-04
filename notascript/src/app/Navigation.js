import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';

const StyledNavigation = styled.nav`
	height: 100%;
	> ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		height: 100%;

		> li {
			align-items: center;
			text-align: center;
			justify-content: center;
			display: grid;
			color: white;
		}
	}
`;

export default class Navigation extends Component {
	render() {
		return (
			<StyledNavigation>
				<ul>
					<li>
						<NavLink to='/create'>
							<i className='far fa-plus-square' />
						</NavLink>
					</li>
					<li>
						<NavLink to='/documents'>
							<i className='fas fa-copy' />
						</NavLink>
					</li>
					<li>
						<NavLink to='/overview'>
							<i className='fas fa-cog' />
						</NavLink>
					</li>
				</ul>
			</StyledNavigation>
		);
	}
}
