import NavLink from '../../app/NavLink.js';
import React from 'react';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	color: #4d6c99;
	border: 1px solid #4d6c99;
	border-radius: 5px;
	display: grid;
	padding: 10px;
	text-align: center;
	justify-content: center;
	font-size: 2em;

	> i {
		color: #4d6c99;
	}
`;

const StyledNavContainer = styled.section`
	height: 100%;
`;

const StyledNav = styled.nav`
	display: grid;
	padding: 20px;
	align-items: center;
	height: 100%;
`;

export default function OverviewPage() {
	return (
		<StyledNavContainer>
			<StyledNav>
				<StyledNavLink to='/documents'>
					<i className='fas fa-copy' />
					Documents
				</StyledNavLink>
				<StyledNavLink to='/domains'>
					<i className='fas fa-tags' />
					Domains
				</StyledNavLink>
				<StyledNavLink to='/dictionaries'>
					<i className='fas fa-book' />
					Dictionaries
				</StyledNavLink>
			</StyledNav>
		</StyledNavContainer>
	);
}
