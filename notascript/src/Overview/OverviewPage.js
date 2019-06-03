import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	background: linear-gradient(135deg, #562323, #4c4a58);
	background: linear-gradient(135deg, #322356, #43579c);
	padding: 10px;
	color: white;
	border-radius: 20px;
	min-height: 180px;
	display: grid;
	justify-content: center;
	align-items: center;
	text-align: center;
	box-shadow: 1px 3px 7px 3px #ccc;
`;

const StyledNavContainer = styled.section`
	display: grid;
	height: 100%;
`;

const StyledNav = styled.nav`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export default function OverviewPage({ onFormSubmit }) {
	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledNavLink to='/create'>Create new file</StyledNavLink>
				<StyledNavLink to='/documents'>Document List</StyledNavLink>
				<StyledNavLink to='/domains'>Domain List</StyledNavLink>
				<StyledNavLink to='/dictionaries'>dictionary List</StyledNavLink>
			</StyledNav>
		</StyledNavContainer>
	);
}
