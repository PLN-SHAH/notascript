import styled from 'styled-components';
import React, { Component } from 'react';
import NavLink from './NavLink.js';
import ReactSVG from 'react-svg';

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
							<ReactSVG src='icon-add.svg' />
						</NavLink>
					</li>
					<li>
						<NavLink to='/documents'>
							<ReactSVG src='icon-overview.svg' />
						</NavLink>
					</li>
					<li>
						<NavLink to='/overview'>
							<ReactSVG src='icon-documents.svg' />
						</NavLink>
					</li>
				</ul>
			</StyledNavigation>
		);
	}
}
