import styled from 'styled-components';
import { NavLink as RRDNavlink } from 'react-router-dom';

const NavLink = styled(RRDNavlink)`
	color: #c11212;
	text-align: right;
	font-family: 'Dancing Script', cursive;

	&:hover {
		text-decoration: none;
	}
`;

export default NavLink;
