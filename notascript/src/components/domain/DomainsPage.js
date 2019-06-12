import DomainList from './DomainList.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavIcon } from '../../misc/Style.js';

const StyledForm = styled.form`
	padding: 20px;
	height: unset;
	grid-template-rows: unset;
	border-top: 5px solid #ee8329;
`;

const StyledButton = styled.button`
	background-color: #ee8329;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function DomainsPage({ domains, onFormSubmit }) {
	function handleSubmit(event) {
		event.preventDefault();

		onFormSubmit(event.target.name.value);
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='name'>New domain name</label>
				<input
					name='name'
					placeholder='add domain name here..'
					type='text'
					required
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>
			<DomainList domains={domains} />
			<StyledNavIcon className='fas fa-tags' />
		</>
	);
}

DomainsPage.propType = {
	domains: PropType.array,
	onFormSubmit: PropType.func
};
