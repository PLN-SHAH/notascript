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

export default class Settings extends Component {
	state = {
		documents: [
			{
				title: 'filename1',
				description: 'some description for filename1',
				domains: ['domainx', 'domainy', 'domainz']
			},
			{
				title: 'filename2',
				description: 'some description for filename2',
				domains: ['domain1', 'domain2', 'domain3']
			},
			{
				title: 'filename3',
				description: 'some description for filename3',
				domains: ['domain_a', 'domain_b', 'domain_c']
			}
		]
	};
	render() {
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
				<DocumentList documentList={this.state.documents} />
			</>
		);
	}
}
