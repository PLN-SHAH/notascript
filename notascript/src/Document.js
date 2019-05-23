import React from 'react';
import styled from 'styled-components';

const StyledDocument = styled.section`
	padding: 20px;
	display: grid;
	grid-template-columns: auto 100px;
`;

const StyledTitle = styled.h4`
	font-size: 2rem;
	margin: 0;
	color: #562323;
	font-family: 'Roboto';
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

//#444547

export default function Document({ document }) {
	return (
		<StyledDocument>
			<section>
				<StyledTitle>{document.title}</StyledTitle>
				<p>{document.description}</p>
				<StyledDomainList>
					<li>domain</li>
					<li>domain</li>
				</StyledDomainList>
			</section>
			<section>
				<button>edit</button>
				<button>delete</button>
			</section>
		</StyledDocument>
	);
}
