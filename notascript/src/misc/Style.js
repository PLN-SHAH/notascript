import styled from 'styled-components';
import NavLink from '../app/NavLink.js';

export const Formular = styled.form`
	height: 100%;
	padding: 20px;
	display: grid;
	grid-template-rows: 1fr 3fr 1fr 1fr;
`;

export const Button = styled.button`
	background: #4d6c99;
	padding: 5px;
	color: white;
	max-height: 50px;
	border: none;
	font-family: 'Dancing Script', cursive;
	font-size: 2rem;
	text-align: center;
	margin: 10px 0;
`;

export const Title = styled.h4`
	word-break: break-all;
	color: #4d6c99;
	font-weight: normal;
	margin: 0;
`;

export const DomainTag = styled.li`
	margin: 5px 10px;
	background: #4d6c99;
	border-radius: 5px;
	box-shadow: -2px 3px 3px 0 #ccc;
	color: white;
	padding: 10px;
`;

export const DomainList = styled.ul`
	display: flex;
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
