import React from 'react';
import styled from 'styled-components';

const StyledDocument = styled.section`
	border: 1px solid blue;
	padding: 20px;
	display: grid;
	grid-template-columns: auto 100px;
`;

const StyledTitle = styled.h4`
	font-size: 2em;
	margin: 0;
`;

export default function Document({ document }) {
	return (
		<StyledDocument>
			<section>
				<StyledTitle>{document.title}</StyledTitle>
				<p>{document.description}</p>
				<ul>
					<li>domain</li>
					<li>domain</li>
				</ul>
			</section>
			<section>
				<button>edit</button>
				<button>delete</button>
			</section>
		</StyledDocument>
	);
}
