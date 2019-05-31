import React from 'react';
import DomainList from './DomainList.js';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Input, Formular, Label, Button, Title } from '../misc/Style.js';

const StyledContainer = styled.section`
	display: grid;
	grid-template-rows: 100px 50px 100px;
`;

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledTitle = styled(Title)`
	padding: 20px;
`;

export default function DomainsPage({ domainList, onFormSubmit }) {
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const input = form.name.value;

		onFormSubmit(input);
	}
	return (
		<StyledContainer>
			<StyledTitle>Add or edit domains</StyledTitle>
			<DomainList domainList={domainList} />
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel htmlFor='name'>New Domain name: </StyledLabel>
				<StyledInput
					type='text'
					name='name'
					placeholder='add domain name here..'
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>
		</StyledContainer>
	);
}

DomainsPage.propType = {
	domainList: PropType.array,
	onFormSubmit: PropType.func
};
