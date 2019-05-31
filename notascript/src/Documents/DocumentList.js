import React from 'react';
import Document from './Document';
import PropTypes from 'prop-types';

export default function DocumentList({ documentList, onDelete }) {
	console.log(documentList, 'doc list');
	return (
		<section>
			{documentList.map(document => (
				<Document
					key={document.id}
					document={document}
					onDelete={() => onDelete(document)}
					{...document}
				/>
			))}
		</section>
	);
}

DocumentList.propTypes = {
	documentList: PropTypes.array,
	onDelete: PropTypes.func
};
