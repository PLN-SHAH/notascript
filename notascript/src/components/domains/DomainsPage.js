import DomainList from './DomainList.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../misc/Style.js';

const StyledButton = styled(Button)``;
const StyledTitle = styled.h4`
	padding: 20px;
`;
const StyledForm = styled.form`
	padding: 20px;
	height: unset;
	grid-template-rows: unset;
`;

export default function DomainsPage({ domainList, onFormSubmit }) {
	function handleSubmit(event) {
		event.preventDefault();

		onFormSubmit(event.target.name.value);
	}

	return (
		<>
			<StyledTitle>Add or edit domains</StyledTitle>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='name'>New title</label>
				<input
					name='name'
					placeholder='add domain name here..'
					type='text'
					required
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>
			<DomainList domainList={domainList} />
		</>
	);
}

DomainsPage.propType = {
	domainList: PropType.array,
	onFormSubmit: PropType.func
};
