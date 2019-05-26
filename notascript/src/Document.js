import React from 'react';
import styled from 'styled-components';
import Domain from './Domain';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledDocument = styled.section`
	padding: 20px;
	display: grid;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: -2px 3px 3px 0 #ccc;
	margin-bottom: 20px;
	border-left-width: 15px;
	border-left-color: #170444;
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

const StyledDeleteButton = styled.button`
	background: transparent;
	border: none;
	justify-self: right;
	width: 30px;
`;

const StyledFile = styled.section`
	display: grid;
`;

export default function Document({ document, onDelete }) {
	return (
		<StyledDocument>
			<StyledFile>
				<StyledDeleteButton onClick={onDelete}>x</StyledDeleteButton>
				<Link to={`details/${document.title}`}>
					<StyledTitle>{document.title}</StyledTitle>
					<p>{document.description}</p>
					<StyledDomainList>
						<Domain domainList={document.domains} />
					</StyledDomainList>
				</Link>
			</StyledFile>
		</StyledDocument>
	);
}

Document.propTypes = {
	document: PropTypes.object
};
