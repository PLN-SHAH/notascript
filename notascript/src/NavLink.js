import styled from 'styled-components';
import { NavLink as RRDNavlink } from 'react-router-dom';

const NavLink = styled(RRDNavlink)`
	color: white;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	&.active {
		color: red;
	}
`;

export default NavLink;
