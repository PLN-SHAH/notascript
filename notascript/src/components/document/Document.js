import DomainList from '../domain/DomainList.js';
import NavLink from '../../app/NavLink.js';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFile = styled.section`
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: -2px 3px 3px 0 #ccc;
	margin-bottom: 20px;
	border-left-width: 15px;
	border-left-color: #4d6c99;
	grid-template-rows: 50px auto auto;
	padding: 20px;
	display: grid;
	width: 100%;
`;
const StyledCta = styled.section`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	justify-content: end;
`;

const StyledIcon = styled.i`
	color: #4d6c99;
`;

const StyledNavLink = styled(NavLink)`
	text-align: left;
`;

export default function Document({ document, onDelete }) {
	const { id, title, domains, description } = document;
	return (
		document && (
			<StyledFile>
				<StyledCta>
					<NavLink to={`edit/${id}`}>
						<StyledIcon className='far fa-edit' />
					</NavLink>
					<button onClick={onDelete}>
						<i className='fas fa-trash-alt' />
					</button>
				</StyledCta>
				<StyledNavLink to={`details/${id}`}>
					<h4>{title}</h4>
					<p>{description}</p>
					<DomainList domainList={domains} />
				</StyledNavLink>
				<StyledNavLink to={`work/${id}`}>...continue work</StyledNavLink>
			</StyledFile>
		)
	);
}

Document.propTypes = {
	document: PropTypes.object,
	title: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.string,
	symbols: PropTypes.array,
	domains: PropTypes.array,
	onDelete: PropTypes.func
};
