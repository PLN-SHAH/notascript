import DomainList from '../domain/DomainList.js';
import NavLink from '../../app/NavLink.js';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFile = styled.section`
	border: 1px solid #ccc;
	border-top: 10px solid #373f43;
	box-shadow: -2px 3px 3px 0 #ccc;
	margin-bottom: 20px;
	padding: 20px;
`;
const StyledCta = styled.section`
	text-align: right;
`;

const StyledIcon = styled.i`
	color: #373f43;
`;

const StyledNavLink = styled(NavLink)`
	> h4 {
		font-weight: bold;
		color: #7cd365;
	}

	> p {
		color: #373f43;
	}
`;

const StyledDeleteButton = styled.button`
	background: white;
`;

export default function Document({ document, onDelete }) {
	const { _id, title, domains, description } = document;
	return (
		document && (
			<StyledFile>
				<StyledCta>
					<NavLink to={`edit/${_id}`}>
						<StyledIcon className='far fa-edit' />
					</NavLink>
					<StyledDeleteButton onClick={onDelete}>
						<i className='fas fa-trash-alt' />
					</StyledDeleteButton>
				</StyledCta>
				<StyledNavLink to={`details/${_id}`}>
					<h4>{title}</h4>
					<p>{description}</p>
					{/* 	<DomainList domainList={domains} /> */}
				</StyledNavLink>
				<NavLink to={`work/${_id}`}>
					...continue work <i className='fas fa-file-signature' />
				</NavLink>
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
