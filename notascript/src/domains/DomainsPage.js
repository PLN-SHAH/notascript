import React from 'react';
import DomainList from './DomainList.js';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Input, Formular, Label, Button } from '../misc/Style.js';

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledDomainList = styled.ul`
	margin: 20px;
	list-style: none;
	padding: 0;
	display: flex;
`;

export default function DomainsPage({ domainList, onFormSubmit }) {
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const input = form.name.value;

		onFormSubmit(input);
	}
	return (
		<>
			<StyledDomainList>
				<DomainList domainList={domainList} />
			</StyledDomainList>
			<section>add/edit domains</section>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel htmlFor='name'>New Domain name: </StyledLabel>
				<StyledInput
					type='text'
					name='name'
					placeholder='add domain name here..'
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>
		</>
	);
}

DomainsPage.propType = {
	domainList: PropType.array
};
