import React from 'react';
import styled from 'styled-components';
import Domain from './Domain';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledDocument = styled.section`
	padding: 20px;
	display: grid;
	border-top: 1px;
	border-color: #562323;
	border-top-style: solid;
`;

const StyledTitle = styled.h4`
	font-size: 2rem;
	margin: 0;
	color: #170444;
	font-family: 'Dancing Script', cursive;
`;

const StyledDomainList = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;

	> li {
		margin: 5px 10px;
		background: linear-gradient(135deg, #322356, #43579c);
		border-radius: 15px;
		box-shadow: -2px 3px 3px 0 #ccc;
		color: white;
		padding: 10px;
	}
`;

export default function Document({ document }) {
	return (
		<StyledDocument>
			<Link to={`details/${document.title}`}>
				<section>
					<StyledTitle>{document.title}</StyledTitle>
					<p>{document.description}</p>
					<StyledDomainList>
						<Domain domainList={document.domains} />
					</StyledDomainList>
				</section>
			</Link>
		</StyledDocument>
	);
}

Document.propTypes = {
	document: PropTypes.object
};
