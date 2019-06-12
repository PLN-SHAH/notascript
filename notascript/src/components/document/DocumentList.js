import Document from './Document';
import PropTypes from 'prop-types';
import React from 'react';

export default function DocumentList({ onDelete, documents }) {
	return (
		<>
			{documents.map(document => (
				<Document
					key={document._id}
					document={document}
					onDelete={() => onDelete(document)}
					{...document}
				/>
			))}
		</>
	);
}

DocumentList.propTypes = {
	onDelete: PropTypes.func,
	documents: PropTypes.array
};
