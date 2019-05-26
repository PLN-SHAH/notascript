import NavLink from './NavLink.js';
import React from 'react';
import DocumentList from './DocumentList';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

const StyledHeadlineNewFileContainer = styled.section`
	color: #562323;
	font-weight: light;
	font-size: 2rem;
	height: 50px;
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	align-items: center;
`;

const StyledHeadlineNewFile = styled.section`
	border-bottom: 1px solid #562323;
`;

const StyledIcon = styled.button`
	background-color: transparent;
	border: none;
	color: white;
`;

export default function Settings(props) {
	return (
		<>
			<StyledHeadlineNewFileContainer>
				<StyledHeadlineNewFile>Add new file</StyledHeadlineNewFile>
				<StyledIcon>
					<NavLink to='/create'>
						<ReactSVG src='icon-add.svg' alt='create new file button' />
					</NavLink>
				</StyledIcon>
			</StyledHeadlineNewFileContainer>
			<DocumentList documentList={props.documentList} />
		</>
	);
}
