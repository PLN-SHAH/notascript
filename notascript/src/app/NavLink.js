import styled from 'styled-components';
import { NavLink as RRDNavlink } from 'react-router-dom';

const NavLink = styled(RRDNavlink)`
	font-family: 'Dancing Script', cursive;

	&:hover {
		text-decoration: none;
	}
`;

export default NavLink;
