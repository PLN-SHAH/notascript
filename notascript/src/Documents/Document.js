import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import DomainList from '../domains/DomainList.js';
import { Title, RouteLink } from '../misc/Style.js';

const StyledFile = styled.section`
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: -2px 3px 3px 0 #ccc;
	margin-bottom: 20px;
	border-left-width: 15px;
	border-left-color: #170444;
	grid-template-rows: 50px auto 50px;
	padding: 20px;
	width: 100%;
`;
const StyledCta = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const StyledDeleteButton = styled.button`
	background: transparent;
	border: none;
	justify-self: right;
	width: 30px;
`;

const StyledTitle = styled(Title)``;

const StyledNavLink = styled(RouteLink)``;

const StyledSymbols = styled.span`
	background: #ddd;
`;

export default function Document({ document, onDelete }) {
	return (
		<StyledFile>
			<StyledCta>
				<Link to={`edit/${document.title}`}>
					<ReactSVG src='icon-edit.svg' />
				</Link>
				<StyledDeleteButton onClick={onDelete}>x</StyledDeleteButton>
			</StyledCta>
			<Link to={`details/${document.title}`}>
				<StyledTitle>{document.title}</StyledTitle>
				<p>{document.description}</p>
				<DomainList domainList={document.domains} />
				<p>
					<StyledSymbols>{document.symbols}</StyledSymbols>
				</p>
			</Link>
			<StyledNavLink to={`work/${document.title}`}>continue work</StyledNavLink>
		</StyledFile>
	);
}

Document.propTypes = {
	document: PropTypes.object,
	onDelete: PropTypes.func
};
