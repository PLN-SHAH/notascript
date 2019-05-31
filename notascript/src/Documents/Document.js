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

const StyledButton = styled.button`
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
	const { id, title, domains, description, symbols } = document;
	return (
		<StyledFile>
			<StyledCta>
				<Link to={`edit/${id}`}>
					<ReactSVG src='icon-edit.svg' />
				</Link>
				<StyledButton onClick={onDelete}>x</StyledButton>
			</StyledCta>
			<Link to={`details/${id}`}>
				<StyledTitle>{title}</StyledTitle>
				<p>{description}</p>
				<DomainList domainList={domains} />
				<p>
					<StyledSymbols>{symbols}</StyledSymbols>
				</p>
			</Link>
			<StyledNavLink to={`work/${id}`}>continue work</StyledNavLink>
		</StyledFile>
	);
}

Document.propTypes = {
	document: PropTypes.object,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	id: PropTypes.number,
	symbols: PropTypes.array,
	domains: PropTypes.array,
	onDelete: PropTypes.func
};
