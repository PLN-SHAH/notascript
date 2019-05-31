import styled from 'styled-components';
import { NavLink as RRDNavlink } from 'react-router-dom';

const NavLink = styled(RRDNavlink)`
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

export default NavLink;
