import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	align-items: center;
	color: white;
	background: linear-gradient(135deg, #322356, #43579c);
	box-shadow: 1px 3px 7px 3px #ccc;
	display: grid;
	padding: 10px;
	text-align: center;
	word-break: break-word;
	min-height: 180px;
	justify-content: center;
`;

const StyledNavContainer = styled.section`
	height: 100%;
`;

const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function OverviewPage() {
	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledNavLink to='/create'>Create new file</StyledNavLink>
				<StyledNavLink to='/documents'>Documents</StyledNavLink>
				<StyledNavLink to='/domains'>Domains</StyledNavLink>
				<StyledNavLink to='/dictionaries'>Dictionaries</StyledNavLink>
			</StyledNav>
		</StyledNavContainer>
	);
}
