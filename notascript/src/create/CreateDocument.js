import React, { useState } from 'react';
import Form from '../app/Form.js';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit, domainList, history }) {
	const [isWork, setIsWork] = useState(false);

	function handleOnChange() {
		setIsWork(!isWork);
	}

	function handleSubmit(doc) {
		onFormSubmit(doc);
		history.push('/');
	}

	return (
		<>
			<Form
				onFormSubmit={handleSubmit}
				domainList={domainList}
				isWork={isWork}
			/>
			<label>
				Continue with work?
				<input type='checkbox' onChange={handleOnChange} />
			</label>
		</>
	);
}

CreateDocument.propType = {
	onFormSubmit: PropType.func,
	domainList: PropType.array
};
