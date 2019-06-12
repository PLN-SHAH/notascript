import styled from 'styled-components';
import NavLink from '../app/NavLink.js';

export const NavIcon = styled.i`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 10px;
	color: white;
	padding: 10px;
`;

export const Subtitle = styled.span`
	font-size: 0.5em;
	color: #ddd;
	font-weight: bold;
`;

export const Formular = styled.form`
	height: 100%;
	padding: 20px;
	display: grid;
	grid-template-rows: 1fr 3fr 1fr 1fr;
`;

export const Title = styled.h4`
	word-break: break-all;
	font-weight: normal;
`;

export const DomainTag = styled.li`
	color: #ee8329;
	font-weight: bold;
`;

export const DomainList = styled.ul`
	padding: 20px;
`;

export const RouteLink = styled(NavLink)`
	color: #170444;
	font-size: 2em;
	text-align: right;
	font-family: 'Dancing Script', cursive;

	&:hover {
		text-decoration: none;
	}
`;
