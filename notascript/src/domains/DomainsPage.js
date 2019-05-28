import React from 'react';
import DomainList from './DomainList.js';
import PropType from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: grid;
	padding: 20px;
`;

const StyledInput = styled.input`
	border: 1px solid #ddd;
	font-size: 1rem;
	margin-bottom: 10px;
	padding-left: 5px;
	font-style: italic;
	height: 45px;
`;

const StyledLabel = styled.label`
	margin-bottom: 5px;
	color: #33050a;
`;

const StyledButton = styled.button`
	background: linear-gradient(135deg, #562323, #4c4a58);
	padding: 5px;
	color: white;
	font-family: 'Dancing Script', cursive;
	font-size: 2rem;
	text-align: center;
`;

export default function DomainsPage({ domainList, onFormSubmit }) {
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const input = form.name.value;
		console.log('new domain name', input);

		onFormSubmit(input);
	}
	return (
		<>
			<DomainList domainList={domainList} />
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
