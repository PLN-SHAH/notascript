import Document from './Document';
import PropTypes from 'prop-types';
import React from 'react';

export default function DocumentList({ documentList, onDelete }) {
	return (
		<>
			{documentList.map(document => (
				<Document
					key={document.id}
					document={document}
					onDelete={() => onDelete(document)}
					{...document}
				/>
			))}
		</>
	);
}

DocumentList.propTypes = {
	documentList: PropTypes.array,
	onDelete: PropTypes.func
};
