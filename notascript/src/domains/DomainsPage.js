import React from 'react';
import DomainList from './DomainList.js';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Input, Label, Button, Title } from '../misc/Style.js';

const StyledInput = styled(Input)``;
const StyledLabel = styled(Label)`
	margin-bottom: 10px;
`;
const StyledButton = styled(Button)``;
const StyledTitle = styled(Title)`
	padding: 20px;
`;
const StyledForm = styled.form`
	padding: 20px;
	display: grid;
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
				<StyledLabel htmlFor='name'>New title</StyledLabel>
				<StyledInput
					type='text'
					name='name'
					placeholder='add domain name here..'
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
