import React from 'react';
import NavLink from '../app/NavLink';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	color: #170444;
	margin: 0 20px;
	font-size: 2em;
	display: grid;
	text-align: right;
	font-family: 'Dancing Script', cursive;

	&:hover {
		text-decoration: none;
	}
`;

const StyledNavContainer = styled.section`
	display: grid;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function OverviewPage({ onFormSubmit }) {
	return (
		<StyledNavContainer>
			<nav>
				<StyledNavLink to='/create'>Create new file</StyledNavLink>
				<StyledNavLink to='/documents'>Document List</StyledNavLink>
				<StyledNavLink to='/domains' onFormSubmit={onFormSubmit}>
					Domain List
				</StyledNavLink>
			</nav>
		</StyledNavContainer>
	);
}
