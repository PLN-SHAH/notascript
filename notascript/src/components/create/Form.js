import PropType from 'prop-types';
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import uid from 'uid';
import { Button, NavIcon } from '../../misc/Style.js';

const StyledNavIcon = styled(NavIcon)``;

const StyledButton = styled(Button)`
	background: #7cd365;
`;

const StyledForm = styled.form`
	border-top: 5px solid #7cd365;
`;

const StyledSelect = styled(Select)`
	font-size: 1rem;
	margin-top: 10px;
	height: 45px;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	color: #7cd365;
`;

export default function FormCreate({ onFormSubmit, domainList }) {
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;
		const domains = [form.domainFirst.value, form.domainSecond.value];

		onFormSubmit({
			title,
			description,
			domains,
			id: uid()
		});
	}

	const options = domainList.map(domain => ({
		value: domain,
		label: domain
	}));

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel htmlFor='title'>New Title</StyledLabel>
				<input
					name='title'
					placeholder='type title here...'
					type='text'
					required
				/>
				<StyledLabel htmlFor='description'>New Description </StyledLabel>
				<textarea
					name='description'
					placeholder='type description here...'
					type='text'
					required
				/>
				{/* <label htmlFor='domainFirst'>
				Choose domains
				<StyledSelect
					name='domainFirst'
					options={options}
					defaultValue={options[0]}
				/>
				<StyledSelect
					name='domainSecond'
					options={options}
					defaultValue={options[1]}
				/>
			</label> */}
				<StyledButton>save</StyledButton>
			</StyledForm>
			<StyledNavIcon className='far fa-plus-square' />
		</>
	);
}

FormCreate.propType = {
	onFormSubmit: PropType.func.isRequired,
	domainList: PropType.array,
	selectedDocument: PropType.object
};
