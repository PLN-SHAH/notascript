import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import DomainList from '../domains/DomainList.js';
import { Title, RouteLink } from '../misc/Style.js';

const StyledTitle = styled(Title)`
	word-break: break-all;
	font-size: 1.8em;
	margin: 0;
`;

const StyledDeleteButton = styled.button`
	background: transparent;
	border: none;
	justify-self: right;
	width: 30px;
`;

const StyledCta = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const StyledInvisibleLink = styled(Link)`
	display: inline-grid;
	grid-template-rows: auto;
`;

const StyledSymbolPreview = styled.p`
	word-break: break-all;
`;

const StyledNavLink = styled(RouteLink)``;

const StyledFile = styled.section`
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: -2px 3px 3px 0 #ccc;
	margin-bottom: 20px;
	border-left-width: 15px;
	border-left-color: #170444;
	display: inline-grid;
	grid-template-rows: 50px auto 50px;
	padding: 20px;
	width: 100%;
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
			<StyledInvisibleLink to={`details/${document.title}`}>
				<StyledTitle>{document.title}</StyledTitle>
				<p>{document.description}</p>

				<DomainList domainList={document.domains} />

				<StyledSymbolPreview>
					<span>{document.symbols}</span>
				</StyledSymbolPreview>
			</StyledInvisibleLink>
			<StyledNavLink to={`work/${document.title}`}>continue work</StyledNavLink>
		</StyledFile>
	);
}

Document.propTypes = {
	document: PropTypes.object,
	onDelete: PropTypes.func
};
