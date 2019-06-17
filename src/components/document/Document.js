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
	text-align: right;
`;
const StyledCta = styled.section``;

const StyledIcon = styled.i`
	color: #373f43;
	font-size: 1em;
	padding-right: 5px;
`;

const StyledButton = styled.button`
	font-size: 1em;
`;
const StyledNavLink = styled(NavLink)`
	text-align: left;

	> h4 {
		font-weight: bold;
		color: #7cd365;
	}

	> p {
		color: #373f43;
	}
`;

export default function Document({ document, onDelete }) {
	const { _id, title, description } = document;
	return (
		document && (
			<StyledFile>
				<StyledCta>
					<NavLink to={`edit/${_id}`}>
						<StyledIcon className='far fa-edit' />
					</NavLink>
					<StyledButton onClick={onDelete}>
						<StyledIcon className='fas fa-trash-alt' />
					</StyledButton>
				</StyledCta>
				<StyledNavLink to={`details/${_id}`}>
					<h4>{title}</h4>
					<p>{description}</p>
				</StyledNavLink>
				<NavLink to={`work/${_id}`}>
					...continue work <StyledIcon className='fas fa-file-signature' />
				</NavLink>
			</StyledFile>
		)
	);
}

Document.propTypes = {
	document: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		_id: PropTypes.string,
		onDelete: PropTypes.func
	})
};
