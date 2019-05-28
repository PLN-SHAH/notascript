import React, { useState } from 'react';
import Form from './Form';
import Work from '../Work/Work.js';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit, domainList }) {
	const [isWork, setIsWork] = useState(false);

	function handleOnChange() {
		setIsWork(!isWork);
	}

	return (
		<>
			<>
				<Form
					onFormSubmit={onFormSubmit}
					domainList={domainList}
					isWork={isWork}
				/>
				<label>
					Continue with work?
					<input type='checkbox' onChange={handleOnChange} />
				</label>
			</>
		</>
	);
}

CreateDocument.propType = {
	onFormSubmit: PropType.func
};
