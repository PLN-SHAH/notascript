import NavLink from './NavLink.js';
import React, { Component } from 'react';
import DocumentList from './DocumentList';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

const StyledHeadlineNewFile = styled.section`
	color: #562323;
	font-weight: bold;
	font-size: 2rem;
	height: 50px;
	display: grid;
	grid-auto-flow: column;
	justify-content: center;
	align-items: center;
`;

const StyledIcon = styled.button`
	background-color: transparent;
	border: none;
	color: white;
`;

export default function Settings(props) {
	console.log('props in settings', props);
	return (
		<>
			<StyledHeadlineNewFile>
				Add new file
				<StyledIcon>
					<NavLink to='/create'>
						<ReactSVG src='icon-add.svg' alt='create new file button' />
					</NavLink>
				</StyledIcon>
			</StyledHeadlineNewFile>
			<DocumentList documentList={props.documentList} />
		</>
	);
}
