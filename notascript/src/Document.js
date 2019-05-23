import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import Domain from './Domain';

const StyledDocument = styled.section`
	padding: 20px;
	display: grid;
	grid-template-columns: auto 100px;
	border-bottom: 10px;
	border-bottom-color: #562323;
	border-bottom-style: solid;
`;

const StyledTitle = styled.h4`
	font-size: 2rem;
	margin: 0;
	color: #562323;
`;

const StyledDomainList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;

	> li {
		margin: 5px 10px;
		background-color: #562323;
		color: white;
		padding: 10px;
	}
`;

export default function Document({ document }) {
	return (
		<StyledDocument>
			<section>
				<StyledTitle>{document.title}</StyledTitle>
				<p>{document.description}</p>
				<StyledDomainList>
					<Domain domainList={document.domains} />
				</StyledDomainList>
			</section>
			{/*<section>
				<button>
					<ReactSVG src='icon-delete.svg' alt='delete button' />
				</button>
				<button>
					<ReactSVG src='icon-edit.svg' alt='edit button' />
				</button>
			</section>*/}
		</StyledDocument>
	);
}
