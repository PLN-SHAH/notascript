import styled from 'styled-components';
import { NavLink as RRDNavlink } from 'react-router-dom';

const NavLink = styled(RRDNavlink)`
	color: white;
	text-decoration: none;

	&:hover {
		padding-bottom: 5px;
		text-decoration: underline;
	}

	&.active {
	}
`;

export default NavLink;
