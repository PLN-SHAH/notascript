import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: grid;
`;

export default class CreateDocument extends Component {
	render() {
		return (
			<>
				<h3>Create a new file</h3>
				<StyledForm>
					<label>New Title</label>
					<input />
					<label>New Description</label>
					<textarea />
					<label>Choose domains</label>
					<select name='top5' size='5'>
						<option>domain option1</option>
						<option>domain option3</option>
						<option>domain option3</option>
					</select>
				</StyledForm>
			</>
		);
	}
}
